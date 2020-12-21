import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksrowComponent } from './booksrow.component';

describe('BooksrowComponent', () => {
  let component: BooksrowComponent;
  let fixture: ComponentFixture<BooksrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
