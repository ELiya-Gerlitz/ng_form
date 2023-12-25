import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from 'src/app/Models/PersonModel';

@Component({
  selector: 'app-edit2-nested-form',
  templateUrl: './edit2-nested-form.component.html',
  styleUrls: ['./edit2-nested-form.component.css']
})
export class Edit2NestedFormComponent implements OnInit{
  public personToEdit: Person = {
    id: 0,
    firstName: 'Noa',
    lastName: 'Chermon',
    email: 'NC@gmail.com',
    address: {
      street: 'Chermon str.',
      city: 'Rechassim'
    },
    children: [
      {name: "Chaim", age: 3},
      {name: "Miri", age: 2},
    ]
  }

  public personForm : FormGroup

  public constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      id: [this.personToEdit.id],
      firstName:[this.personToEdit.firstName],
      lastName: [this.personToEdit.lastName],
      email: [this.personToEdit.email],
      // address: this.formBuilder.group({
      //   street: [this.personToEdit.address.street],
      //   city: [this.personToEdit.address.city],
      // }),
      address: this.addressGroup(),
      children: []
    })
  }
  public addressGroup(): FormGroup{
    return this.formBuilder.group({
      city: [this.personToEdit.address.city],
      street: [this.personToEdit.address.street],
    })
  }

  public submit(){
    this.personToEdit = this.personForm.value

  }

}
