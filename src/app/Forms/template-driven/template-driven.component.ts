import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  handleFormSubmit(form: NgForm): void {
    // value will print the JavaScript Object of the Form Values.
    console.log(form.value);
  }

  name:string = 'Neeraj';

}
