import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourFilterAdvancedComponent } from './dinosour-filter-advanced.component';

describe('DinosourFilterAdvancedComponent', () => {
  let component: DinosourFilterAdvancedComponent;
  let fixture: ComponentFixture<DinosourFilterAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourFilterAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourFilterAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
