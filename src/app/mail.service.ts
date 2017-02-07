import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

	message = `Has obtenido un email!`;

	messages = [
	{id: 0, text: `Soy Cristian Toaquiza`},
	{id: 1, text:`Lily y tu ya no son amigos`}
	]

	update(id, text) {
		this.messages = this.messages.map(m=>
		m.id === id
		? {id, text}
		: m);
	}

  constructor() { }

}
