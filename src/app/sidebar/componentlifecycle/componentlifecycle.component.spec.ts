import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentlifecycleComponent } from './componentlifecycle.component';

describe('ComponentlifecycleComponent', () => {
  let component: ComponentlifecycleComponent;
  let fixture: ComponentFixture<ComponentlifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentlifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
