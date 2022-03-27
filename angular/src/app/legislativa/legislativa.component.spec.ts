import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislativaComponent } from './legislativa.component';

describe('LegislativaComponent', () => {
  let component: LegislativaComponent;
  let fixture: ComponentFixture<LegislativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegislativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
