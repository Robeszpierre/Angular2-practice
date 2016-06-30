import {Component} from '@angular/core';
import {TestComponent} from './test.component';
import {OnInit} from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
    Hi, I'm <span [style.color]="inputElement.value === 'yes' ? 'red' : ' ' ">{{name}}</span> and this is my very first angular 2 component! <span [class.is-awesome]="inputElement.value === 'yes'">Its so awesome!</span>
    <br>
    <br>
    Is it awesome?
    <input type="text" #inputElement (keyup)="0">
    <br>
    <br>
    <button [disabled]="inputElement.value !== 'yes'">Only enabled if 'yes was'</button>
    <test></test>
  `,
  styleUrls: ['src/css/mycomponent.css'],
  directives: [TestComponent]
})
export class MyComponentComponent implements OnInit{
  name: string;

  ngOnInit():any {
    this.name = "Max";
  }
}
