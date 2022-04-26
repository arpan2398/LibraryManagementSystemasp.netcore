import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFacultyComponent } from './show-faculty.component';

describe('ShowFacultyComponent', () => {
  let component: ShowFacultyComponent;
  let fixture: ComponentFixture<ShowFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
