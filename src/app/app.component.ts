import { Component, Inject } from '@angular/core';
//import { MailService } from './mail.service' //no es necesario con la 2da forma

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div>
  <li *ngFor="let message of mail.messages">{{message.text}}</li>
  <ul>
  	<app-simple-form *ngFor="let message of mail.messages"
  	[mensaje]="message.text"
    (update)="onUpdate(message.id, $event.text)">
  	</app-simple-form>
  </ul>
  </div>
  `,
  styles: [`
  app-simple-form {
    margin-bottom: 10px;
  }
  `]
})
export class AppComponent {
  onUpdate(id, text) {
    this.mail.update(id, text);
  }

  title = 'Listos para empezar!';
  //private mail: MailService ---> primera forma de injectar el servicio
  //@Inject('api') private api ---> segunda forma de injectar
  //constructor(private mail: MailService, @Inject('api') private api) {}
  constructor(
  	@Inject('mail') private mail, 
  	@Inject('api') private api
  	) {}
}
