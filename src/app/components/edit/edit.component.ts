import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Person } from 'src/app/Models/PersonModel';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  public personToEdit : Person = {
    id: 1,
    firstName: 'Rivka',
    lastName: 'Weisz',
    email: 'RW@gmail.com'
  }
  public personForm : FormGroup

  public constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
  this.personForm = this.formBuilder.group({
    id: [this.personToEdit.id, [Validators.required]],
    firstName: [this.personToEdit.firstName, [Validators.required, this.customValidation]],
    lastName: [this.personToEdit.lastName, [Validators.required, this.customValidation]],
    email: [this.personToEdit.email, [Validators.required]]
})
  }
  public submit(){
    this.personToEdit = this.personForm.value
  }

  public customValidation(control : FormControl):  ValidationErrors | null{
    if(control.value.length === 5 ){
      return null
    }
    // return control.errors
    const ans = {"errorMessage": {"length error": "length should be exactly 5 characters"}}
    console.log(ans.errorMessage['length error'])
    return ans
  }

}
