import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { UsernameValidator } from 'src/app/username.validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  sampleForm!: FormGroup; // reactive form
  name: string = 'test';

  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
    // create an instance of form group// for the object passed, the key identifies the control name, the value identifies the actual control// the Validators provides validator functions that need to be applied to the control value
    this.sampleForm = new FormGroup({
      'name': new FormControl('', [Validators.required], [UsernameValidator.createValidator(this.userService)]),
      'emailAddress': new FormControl('', [Validators.required, Validators.email]),
      'age': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
    });
  }

  handleReactiveSubmit() {
    // the submit event for the form that displays the values
    console.log(this.sampleForm.value);
  }

}
