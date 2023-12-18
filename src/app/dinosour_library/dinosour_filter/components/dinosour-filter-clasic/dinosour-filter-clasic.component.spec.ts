import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourFilterClasicComponent } from './dinosour-filter-clasic.component';

describe('DinosourFilterClasicComponent', () => {
  let component: DinosourFilterClasicComponent;
  let fixture: ComponentFixture<DinosourFilterClasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourFilterClasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourFilterClasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
