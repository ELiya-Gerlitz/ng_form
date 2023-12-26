import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, MinValidator, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { Person } from 'src/app/Models/PersonModel';

@Component({
  selector: 'app-arr',
  templateUrl: './arr.component.html',
  styleUrls: ['./arr.component.css']
})
export class ArrComponent implements OnInit {
  public personToEdit : Person = {
    id: 1,
    firstName: 'Gili',
    lastName: 'Mili',
    email: 'GM@gmail.com',
    address: {
      city: "Jerusalem",
      street: "Chabad",
    },
    children: [
      {name: "Yarden" , age: 11},
      {name: "Gil" , age: 10},
    ]
  }
  public personForm : FormGroup
  public constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      id: [this.personToEdit.id, Validators.required],
      firstName: [this.personToEdit.firstName, Validators.required],
      lastName: [this.personToEdit.lastName, Validators.required],
      email: [this.personToEdit.email, [Validators.required, Validators.email]],
      address: this.addressForm(),
      children: this.childrenArr()
    })
    this.personForm.valueChanges.pipe(filter(x=> this.personForm.valid), debounceTime(500)).subscribe(x=>this.personToEdit = this.personForm.value)
  }
  public addressForm():FormGroup{
    return this.fb.group({
      city: [this.personToEdit.address.city, Validators.required],
      street: [this.personToEdit.address.street, [Validators.required, Validators.minLength(1)]],
    })
  }
  public childrenArr():FormArray{
    const arr = []
    for(let child of this.personToEdit.children){
      const childForm = this.fb.group({
        name: [child.name, Validators.required],
        age: [child.age, [Validators.required, Validators.min(0)]]
      })
      arr.push(childForm)
    }
    return this.fb.array(arr)
  }
  
  get childrenControlGetter():FormArray{
    return this.personForm.get("children") as FormArray
  }
  public submit(){
    this.personToEdit = this.personForm.value
      
  }


}
