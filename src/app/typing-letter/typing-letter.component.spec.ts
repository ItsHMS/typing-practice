import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingLetterComponent } from './typing-letter.component';

describe('TypingLetterComponent', () => {
  let component: TypingLetterComponent;
  let fixture: ComponentFixture<TypingLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingLetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
