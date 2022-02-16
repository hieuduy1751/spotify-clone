import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSongComponent } from './player-song.component';

describe('PlayerSongComponent', () => {
  let component: PlayerSongComponent;
  let fixture: ComponentFixture<PlayerSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
