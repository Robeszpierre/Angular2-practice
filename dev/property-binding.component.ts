import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-property-binding',
  template: `
    <h2>This is the child component</h2>
    <p>Hey {{name}}! and I am {{age}} years old!</p>
  `
})
export class PropertyBindingComponent implements OnInit {
    @Input('myName')name = "";
    @Input('myAge') age = 20;
  ngOnInit() {}
}
