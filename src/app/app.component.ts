import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';
  sampleForm!: FormGroup; // reactive form
  name: string = 'test';
  todoListData: any = []
  value: any = ''

  ngOnInit(): void {
    // create an instance of form group// for the object passed, the key identifies the control name, the value identifies the actual control// the Validators provides validator functions that need to be applied to the control value
    this.sampleForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'emailAddress': new FormControl('', [Validators.required, Validators.email]),
      'age': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
    });
    this.value = 'Neeraj'
  }

  handleFormSubmit(form: NgForm): void {
    // value will print the JavaScript Object of the Form Values.
    console.log(form.value);
  }

  handleReactiveSubmit() {
    // the submit event for the form that displays the values
    console.log(this.sampleForm.value);
  }
}
