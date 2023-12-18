import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourButtonComponent } from './DinosourButtonComponent';

describe('DinosourButtonComponent', () => {
  let component: DinosourButtonComponent;
  let fixture: ComponentFixture<DinosourButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DinosourButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
