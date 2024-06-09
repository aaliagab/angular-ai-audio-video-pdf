import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  question: string = '';
  messages: { sender: 'user' | 'bot', text: string }[] = [];

  constructor(private http: HttpClient) { }

  sendQuestion() {
    if (!this.question.trim()) {
      return;
    }

    this.messages.push({ sender: 'user', text: this.question });

    this.http.get<string>(`/db/chat/query-question-from-chatgpt?question=${encodeURIComponent(this.question)}`)
      .subscribe(
        (response: string) => {
          this.messages.push({ sender: 'bot', text: response });
          this.question = '';
        },
        (error) => {
          console.error('Error sending question:', error);
        }
      );
  }
}
