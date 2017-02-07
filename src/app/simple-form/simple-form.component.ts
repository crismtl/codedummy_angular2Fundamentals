import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'app-simple-form',
  template: `
    <!--{{mensaje}}-->
    <input 
    #myInput 
    type="text" 
    [(ngModel)]="mensaje"
    [ngClass]="{mousedown:isMouseDown}"
    (mousedown)="isMouseDown=true"
    (mouseup)="isMouseDown=false"
    (mouseleave)="isMouseDown=false"
    >
    <!--<button (click)="onClick($event, myInput.value)">Click me</button>-->
    <button
    class="white bg-black code"
    (click)="update.emit({text:mensaje})">
    Click me!
    </button>
  `,
  styles: [`
  :host{
    display: flex;
    flex-direction: column;
  }
  .mousedown{
    border: 2px solid green;
  }
  *{
    font-family: monospace;
  }
  input:focus{
    font-weight: bold;
    outline: none;
  }
  button{
    border: none;
  }
  `]
})
export class SimpleFormComponent implements OnInit {
  isMouseDown;

  @Input() mensaje;

  @Output() update = new EventEmitter();

  constructor() { 
    //setInterval(()=>this.mensaje = Math.random.toString, 1000);
  }

  ngOnInit() {
  }

  onClick(event, value) {
    console.log('Event', event);
    console.log('Value', value);
  }

}
