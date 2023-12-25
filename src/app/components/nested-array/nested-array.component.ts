import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ChildrenModel } from 'src/app/Models/ChildrenModel';
import { Person } from 'src/app/Models/PersonModel';

@Component({
  selector: 'app-nested-array',
  templateUrl: './nested-array.component.html',
  styleUrls: ['./nested-array.component.css']
})
export class NestedArrayComponent implements OnInit{
  public personToEdit: Person = {
    id: 4,
    firstName: 'Chaim',
    lastName: 'Yaffe',
    email: 'CF@gmail.com',
    address: {
      street: 'Chermon str',
      city: 'Rechassim'
    },
    children: [
      {name: "Motti", age: 7},
      {name: "Yossi", age: 9},
    ]
  }
  public constructor(private fb: FormBuilder){}
  public personForm : FormGroup

  ngOnInit(): void {
    this.personForm = this.fb.group({
      id: [this.personToEdit.id],
      firstName: [this.personToEdit.firstName],
      lastName: [this.personToEdit.lastName],
      email: [this.personToEdit.email],
      address: this.addressGroup(),
      // address: this.fb.group({
      //   city: this.personToEdit.address.city,
      //   street: this.personToEdit.address.street
      // }),
      children : this.childrenArray()
    })
  }
  get childrenControlGetter(): FormArray{
    const arr :FormArray = this.personForm.get("children") as FormArray
    return arr
  }
  // public childrenArray():FormArray{
  //   const arr = []
  //   for (const child of this.personToEdit.children) {
  //     const group :FormGroup = this.fb.group({
  //       name: child.name,
  //       age: child.age,
  //     })
  //     arr.push(group)
  //   }
  //   return this.fb.array(arr)
  // }
  public childrenArray():FormArray{
    const arr = []
    for (const child of this.personToEdit.children) {
      const group = this.childrenForms(child)
      arr.push(group)
    }
    return this.fb.array(arr)
  }
  public childrenForms(child : ChildrenModel): FormGroup{
    return this.fb.group({
      name: [child.name],
      age: [child.age],

    })
  }
  public addressGroup(): FormGroup{
    return this.fb.group({
      city: [this.personToEdit.address.city],
      street: [this.personToEdit.address.street],
    })
  }
  public submit(){
    this.personToEdit = this .personForm.value

  }

}
