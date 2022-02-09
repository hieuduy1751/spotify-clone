import { catchError, finalize, tap } from 'rxjs/operators';
import { PlaylistService } from './../../services/playlist/playlist.service';
import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subscription } from 'rxjs';
import { Playlist } from '../../models/playlist/playlist';

@Injectable()

export class PlaylistState implements OnDestroy {
  private isReadySubject = new BehaviorSubject<boolean>(false);
  public $isReady = this.isReadySubject.asObservable();

  private playlistSubject = new BehaviorSubject<Playlist[]>([]);
  public playlist$ = this.playlistSubject.asObservable();

  subscription: Subscription = new Subscription();

  constructor(private playlist: PlaylistService) {
    this.loadPlaylist();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPlaylist(): Playlist[] {
    return this.playlistSubject.getValue();
  }

  setIsReady(isReady: boolean): void {
    this.isReadySubject.next(isReady);
  }

  loadPlaylist(limit?: number, offset?: number): void {
    const sb = this.playlist.getCurrentUserPlaylists(limit, offset)
      .pipe(
        tap((playlist) => {
          return this.playlistSubject.next(playlist);
        }),
        catchError(err => {
          console.log(err);
          return [];
        }),
        finalize(() => {
          this.setIsReady(true);
        })
      ).subscribe();
    this.subscription.add(sb);
  }
}