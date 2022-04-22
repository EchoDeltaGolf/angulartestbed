import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel-entry',
  templateUrl: './travel-entry.component.html',
  styleUrls: ['./travel-entry.component.css']
})
export class TravelEntryComponent implements OnInit {
  travelForm: FormGroup;
  formValue: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {
    this.travelForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.travelForm = this.fb.group({
      travelName: ['', [Validators.required]]
     ,travelPlace: ['', [Validators.required]]
     ,travelItenerary: this.fb.array([])
   });
  }

  get travelItenerary(): FormArray {
    return this.travelForm.get('travelItenerary') as FormArray;
  }

  iteneraryActivity(index: number): FormArray { // accepts index number to determine the position of the formarray in the parent
    return this.travelItenerary.at(index).get('iteneraryActivity') as FormArray;
  }

  addItenerary(): void {
    let itenerary = this.travelForm.get('travelItenerary') as FormArray;

    itenerary.push(this.fb.group({
        iteneraryDate: ['', [Validators.required]]
       ,iteneraryActivity: this.fb.array([
         this.fb.group({
           activityName: ['', [Validators.required]]
          ,activityTime: ['', [Validators.required]]
          ,activityDesc: ['', [Validators.required]]
         })
       ])
      })
    );
  }

  addActivity(actIndex: number): void {
    let itenerary = this.travelForm.get('travelItenerary') as FormArray;

    let activities = itenerary.get(actIndex.toString())?.get('iteneraryActivity') as FormArray;

    activities.push(this.fb.group({
       activityName: ['', [Validators.required]]
      ,activityTime: ['', [Validators.required]]
      ,activityDesc: ['', [Validators.required]]
    }));
  }

  submitForm(): void {
    console.log(this.travelForm.value);
  }
}
