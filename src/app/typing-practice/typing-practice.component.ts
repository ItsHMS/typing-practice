import { Component, HostListener } from '@angular/core';
import { TextService } from '../text.service';
import { TypingLetterComponent } from '../typing-letter/typing-letter.component'
@Component({
  selector: 'app-typing-practice',
  standalone: true,
  imports: [TypingLetterComponent],
  templateUrl: './typing-practice.component.html',
  styleUrl: './typing-practice.component.css',
})
export class TypingPracticeComponent {
  originalText: string = '';
  displayedText: string[] = [];
  currentIndex: number = 0;
  userTypedText: string[] = [];
  constructor(public textService: TextService) {
    this.originalText = this.textService.getText();
    this.displayedText = this.originalText.split('');
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace') {
      this.currentIndex = Math.max(0, this.currentIndex - 1);
      this.userTypedText.pop()
    } else {
      if (this.currentIndex < this.originalText.length) {
        this.userTypedText[this.currentIndex] = event.key;
        this.currentIndex++;
      }
    }
  }

  isCorrectIndex(index: number): boolean {
    return this.originalText[index] === this.userTypedText[index];
  }
}
