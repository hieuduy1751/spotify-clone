import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistFunctionComponent } from './playlist-function.component';

describe('PlaylistFunctionComponent', () => {
  let component: PlaylistFunctionComponent;
  let fixture: ComponentFixture<PlaylistFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
