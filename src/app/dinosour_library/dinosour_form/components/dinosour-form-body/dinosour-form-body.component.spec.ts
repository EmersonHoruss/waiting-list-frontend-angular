import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourFormBodyComponent } from './dinosour-form-body.component';

describe('DinosourFormBodyComponent', () => {
  let component: DinosourFormBodyComponent;
  let fixture: ComponentFixture<DinosourFormBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourFormBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourFormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
