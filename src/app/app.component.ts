import { Component } from '@angular/core';
import NexmoClient, { type Application } from 'nexmo-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-nexmo-client-test';
  app: Application | null = null;
  constructor() {
    const client = new NexmoClient();
    client.createSession("token")
      .then((app) => {
        this.app = app;
        console.log('app', app);
      });
  }
}
