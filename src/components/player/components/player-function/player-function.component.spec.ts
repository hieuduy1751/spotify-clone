import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFunctionComponent } from './player-function.component';

describe('PlayerFunctionComponent', () => {
  let component: PlayerFunctionComponent;
  let fixture: ComponentFixture<PlayerFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
