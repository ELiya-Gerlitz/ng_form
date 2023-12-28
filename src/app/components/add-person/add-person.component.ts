import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChildrenModel } from 'src/app/Models/ChildrenModel';
import { Person } from 'src/app/Models/PersonModel';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit{
public peopleArr: Person[] = []
public newPerson: Person 
public personForm : FormGroup

public constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
      }),
      children: this.fb.array([this.createChildFormGroup()]),
    })
  }

  get childrenFormArray(): FormArray{ // איך 'שולים' שדה מאובייקט של טופס? 🐟🎣 =>
    return this.personForm.get('children') as FormArray
  }

  public createChildFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      age: [null , [Validators. required, Validators.min(0)]]
    })as  ChildrenModel & FormGroup;
  }
  
  public addChild():void{
    this.childrenFormArray.push(this.createChildFormGroup());
  }
 
  
public submit(){
this.personForm.value.id = this.peopleArr.length +1
this.newPerson = this.personForm.value
this.peopleArr.push(this.newPerson)
console.log(this.peopleArr)
this.personForm.setControl('children', this.fb.array([this.createChildFormGroup()]));
this.personForm.reset()
alert("SUCCESSFULLY ADDED!")
}

public removeChild(num : number){
  if(num >0){
    this.childrenFormArray.removeAt(num)
  }
}
  }


