import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourDialogFormComponent } from './dinosour-dialog-form.component';

describe('DinosourDialogFormComponent', () => {
  let component: DinosourDialogFormComponent;
  let fixture: ComponentFixture<DinosourDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourDialogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
