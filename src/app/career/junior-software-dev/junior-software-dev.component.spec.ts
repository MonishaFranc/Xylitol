import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorSoftwareDevComponent } from './junior-software-dev.component';

describe('JuniorSoftwareDevComponent', () => {
  let component: JuniorSoftwareDevComponent;
  let fixture: ComponentFixture<JuniorSoftwareDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuniorSoftwareDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorSoftwareDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
