import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourTableBodyComponent } from './dinosour-table-body.component';

describe('DinosourTableBodyComponent', () => {
  let component: DinosourTableBodyComponent;
  let fixture: ComponentFixture<DinosourTableBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourTableBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
