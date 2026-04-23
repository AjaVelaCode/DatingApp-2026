import { HttpClient } from '@angular/common/http';
import { Component, signal, inject, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected readonly title = signal('Dating app');
  protected members = signal<any>([]);

  ngOnInit(): void {
    this.getMembers();
  }


  private getMembers() {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: response => this.members.set(response),
      error: error => console.log(error),
      complete: () => console.log('Request completed')
    });
  }

   


}
