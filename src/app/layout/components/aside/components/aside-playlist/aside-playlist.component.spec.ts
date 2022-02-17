import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidePlaylistComponent } from './aside-playlist.component';

describe('AsidePlaylistComponent', () => {
  let component: AsidePlaylistComponent;
  let fixture: ComponentFixture<AsidePlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsidePlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
