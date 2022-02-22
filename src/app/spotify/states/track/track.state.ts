import { TrackService } from './../../services/track/track.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, finalize, Observable, Subscription, tap } from 'rxjs';
import { Track } from '../../models/track/track';

@Injectable()
export class TrackState {
  private isReadySubject = new BehaviorSubject<boolean>(false);
  public $isReady = this.isReadySubject.asObservable();

  private trackSubject = new BehaviorSubject<Track>(new Track);
  public track$ = this.trackSubject.asObservable();

  subscription = new Subscription();

  constructor(private trackService: TrackService) { }

  getTrack() {
    return this.trackSubject.getValue();
  }

  setIsReady(isReady: boolean) {
    this.isReadySubject.next(isReady);
  }

  loadTrack(id: string) {
    const sb = this.trackService.getTrack(id)
      .pipe(
        tap((track) => {
          return this.trackSubject.next(track);
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