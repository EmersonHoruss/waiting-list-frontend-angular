import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourFormComponent } from './dinosour-form.component';

describe('DinosourFormComponent', () => {
  let component: DinosourFormComponent;
  let fixture: ComponentFixture<DinosourFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
