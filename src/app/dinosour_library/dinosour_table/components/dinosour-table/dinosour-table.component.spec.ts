import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourTableComponent } from './dinosour-table.component';

describe('DinosourTableComponent', () => {
  let component: DinosourTableComponent;
  let fixture: ComponentFixture<DinosourTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
