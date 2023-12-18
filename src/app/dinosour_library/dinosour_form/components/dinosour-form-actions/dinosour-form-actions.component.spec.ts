import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourFormActionsComponent } from './dinosour-form-actions.component';

describe('DinosourFormActionsComponent', () => {
  let component: DinosourFormActionsComponent;
  let fixture: ComponentFixture<DinosourFormActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourFormActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourFormActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
