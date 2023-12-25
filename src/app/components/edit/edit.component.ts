import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ChildrenModel } from 'src/app/Models/ChildrenModel';
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
    email: 'RW@gmail.com',
    address: {
      city: "Zürich",
      street: "Brandschenkestr. 14"
    },
    children: [
      {name: "Meir", age: 9},
      {name: "Yoni", age: 10},
    ]
  }

  createChildrenFormGroup(child: ChildrenModel):FormGroup{ // generates a formGroup for every child.
    return this.formBuilder.group({
    name: [child.age, [Validators.required]],
    age: [child.name, [Validators.required]],
    });
    }

  public childrenArrayToPushIntoForm(children: ChildrenModel[]) { //אחכ להגיד בהשמה של הבילדר ש children=this.persontoedit.children
    let childrenArr:any[]= []
    for(let child of children){
        let childForm = this.createChildrenFormGroup(child)
        childrenArr.push(childForm)
    }
      console.log(childrenArr)
      return this.formBuilder.array(childrenArr)
  }

  public personForm : FormGroup

  public constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
  this.personForm = this.formBuilder.group({
    id: [this.personToEdit.id, [Validators.required]],
    firstName: [this.personToEdit.firstName, [Validators.required, this.customValidation]],
    lastName: [this.personToEdit.lastName, [Validators.required, this.customValidation]],
    email: [this.personToEdit.email, [Validators.required]],
    address: this.formBuilder.group({
      street: [this.personToEdit.address.street, [Validators.required]],
      city: [this.personToEdit.address.city, [Validators.required]],
    }),
    children: this.childrenArrayToPushIntoForm(this.personToEdit.children)
    // children: this.childrenForm()
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
