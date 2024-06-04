import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterIconComponent } from './letter-icon.component';

describe('LetterIconComponent', () => {
  let component: LetterIconComponent;
  let fixture: ComponentFixture<LetterIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterIconComponent]
    });
    fixture = TestBed.createComponent(LetterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
