import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourDialogMessageComponent } from './dinosour-dialog-message.component';

describe('DinosourDialogMessageComponent', () => {
  let component: DinosourDialogMessageComponent;
  let fixture: ComponentFixture<DinosourDialogMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourDialogMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourDialogMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
