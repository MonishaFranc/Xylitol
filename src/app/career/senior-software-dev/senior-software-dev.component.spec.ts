import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorSoftwareDevComponent } from './senior-software-dev.component';

describe('SeniorSoftwareDevComponent', () => {
  let component: SeniorSoftwareDevComponent;
  let fixture: ComponentFixture<SeniorSoftwareDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorSoftwareDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorSoftwareDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
