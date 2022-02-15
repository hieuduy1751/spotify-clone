import { ImgColorDetectService } from './../../services/imgColorDetection/img-color-detect.service';
import { catchError, finalize, tap } from 'rxjs/operators';
import { PlaylistService } from './../../services/playlist/playlist.service';
import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subscription } from 'rxjs';
import { Playlist } from '../../models/playlist/playlist';

@Injectable()

export class PlaylistState implements OnDestroy {
  private isReadySubject = new BehaviorSubject<boolean>(false);
  public $isReady = this.isReadySubject.asObservable();

  private playlistsSubject = new BehaviorSubject<Playlist[]>([]);
  public playlists$ = this.playlistsSubject.asObservable();

  private playlistSubject = new BehaviorSubject<Playlist>(new Playlist());
  public playlist$ = this.playlistSubject.asObservable();

  private colorDetectedSubject = new BehaviorSubject<any>({});
  public colorDetected$ = this.colorDetectedSubject.asObservable();

  subscription: Subscription = new Subscription();

  constructor(private playlistService: PlaylistService, private colorDetectService: ImgColorDetectService) {
    this.loadMyPlaylist();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getMyPlaylist(): Playlist[] {
    return this.playlistsSubject.getValue();
  }

  getPlaylist(): Playlist {
    return this.playlistSubject.getValue();
  }

  getColorDetected() {
    return this.colorDetectedSubject.getValue();
  }

  setIsReady(isReady: boolean): void {
    this.isReadySubject.next(isReady);
  }

  loadMyPlaylist(limit?: number, offset?: number): void {
    const sb = this.playlistService.getCurrentUserPlaylists(limit, offset)
      .pipe(
        tap((playlist) => {
          return this.playlistsSubject.next(playlist);
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

  loadPlaylist(id: string): void {
    const sb = this.playlistService.getPlaylist(id)
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

  loadColor(imgSrc: string) {
    const sb = this.colorDetectService.getDominantColor(imgSrc)
      .pipe(
        tap((color) => {
          return this.colorDetectedSubject.next(color);
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