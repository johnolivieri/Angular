import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStatsComponent } from './book-stats.component';

describe('BookStatsComponent', () => {
  let component: BookStatsComponent;
  let fixture: ComponentFixture<BookStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
