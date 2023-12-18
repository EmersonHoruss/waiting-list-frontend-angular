import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourPageComponent } from './dinosour-page.component';

describe('DinosourPageComponent', () => {
  let component: DinosourPageComponent;
  let fixture: ComponentFixture<DinosourPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
