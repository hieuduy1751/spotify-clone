import { UserService } from './../../services/user/user.service';
import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, catchError, finalize, Subscription, tap } from 'rxjs';
import { User } from '../../models/user/user';

@Injectable()
export class UserState implements OnDestroy {
  private isReadySubject = new BehaviorSubject<boolean>(false);
  public $isReady = this.isReadySubject.asObservable();

  private meSubject = new BehaviorSubject<User>(new User());
  public me$ = this.meSubject.asObservable();

  private userSubject = new BehaviorSubject<User>(new User());
  public user$ = this.userSubject.asObservable();

  constructor(private userService: UserService) {
    this.loadMe();
  }

  subscription: Subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getMe(): User {
    return this.meSubject.getValue();
  }

  getUser(): User {
    return this.userSubject.getValue();
  }

  setIsReady(isReady: boolean): void {
    this.isReadySubject.next(isReady);
  }

  loadMe(): void {
    const sb = this.userService.getMe()
      .pipe(
        tap((user) => {
          return this.meSubject.next(user);
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

  loadUser(userId: string): void {
    const sb = this.userService.getUser(userId)
      .pipe(
        tap((user) => {
          return this.userSubject.next(user);
        }
        ),
        catchError(err => {
          console.log(err);
          return [];
        }
        ),
        finalize(() => {
          this.setIsReady(true);
        }
        )
      ).subscribe();
    this.subscription.add(sb);
  }
}