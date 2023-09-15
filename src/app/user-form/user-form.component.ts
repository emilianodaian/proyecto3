import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
 userForm=new FormGroup({
    nombre:new FormControl(''),
    email:new FormControl('')
  });

  onSubmit(){
    console.log(this.userForm.value);
  }

}
