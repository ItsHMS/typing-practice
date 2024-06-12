import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typing-letter',
  standalone: true,
  imports: [],
  templateUrl: './typing-letter.component.html',
  styleUrl: './typing-letter.component.css',
})
export class TypingLetterComponent {
  @Input() char!: string;
  @Input() index!: number;
  @Input() currentIndex!: number;
  @Input() isCorrect!: boolean;

  get isTyped(): boolean {
    return this.index < this.currentIndex;
  }
}
