import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  getText(): string {
    return 'this is a sample paragraph for typing practice.';
  }
}
