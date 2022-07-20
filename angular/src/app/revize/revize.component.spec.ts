import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevizeComponent } from './revize.component';

describe('RevizeComponent', () => {
  let component: RevizeComponent;
  let fixture: ComponentFixture<RevizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
