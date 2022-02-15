import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistBannerComponent } from './playlist-banner.component';

describe('PlaylistBannerComponent', () => {
  let component: PlaylistBannerComponent;
  let fixture: ComponentFixture<PlaylistBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
