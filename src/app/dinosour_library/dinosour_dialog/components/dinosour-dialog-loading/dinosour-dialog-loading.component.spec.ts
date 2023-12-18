import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourDialogLoadingComponent } from './dinosour-dialog-loading.component';

describe('DinosourDialogLoadingComponent', () => {
  let component: DinosourDialogLoadingComponent;
  let fixture: ComponentFixture<DinosourDialogLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourDialogLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourDialogLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
