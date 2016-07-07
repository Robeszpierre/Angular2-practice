import {Component} from '@angular/core';
import {TemplateDrivemFormComponent} from './template-driven-form.component';

@Component({
    selector: 'my-app',
    template: `
    <my-template-driven></my-template-driven>
`,
directives: [TemplateDrivemFormComponent]
})
export class AppComponent {

}
