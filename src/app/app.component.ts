import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypingPracticeComponent } from './typing-practice/typing-practice.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TypingPracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'typing-practice';
}
