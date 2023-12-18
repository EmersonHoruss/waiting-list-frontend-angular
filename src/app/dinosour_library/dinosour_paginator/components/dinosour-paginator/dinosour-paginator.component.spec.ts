import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosourPaginatorComponent } from './dinosour-paginator.component';

describe('DinosourPaginatorComponent', () => {
  let component: DinosourPaginatorComponent;
  let fixture: ComponentFixture<DinosourPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosourPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosourPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
