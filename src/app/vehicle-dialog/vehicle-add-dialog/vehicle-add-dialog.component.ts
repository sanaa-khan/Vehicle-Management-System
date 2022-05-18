import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import { VEHICLE } from '../../app.component';

@Component({
  selector: 'app-vehicle-add-dialog',
  templateUrl: './vehicle-add-dialog.component.html',
  styleUrls: ['./vehicle-add-dialog.component.css']
})
export class VehicleAddDialogComponent implements OnInit {

  public vehicle: VEHICLE = {
    _id: undefined,
    title: "",
    assembly: "",
    color: "",
    condition: 0,
    date: 0,
    engine_capacity: "",
    features: "",
    img_path: "",
    last_updated: "",
    location: "",
    make: "",
    mileage: 0,
    model: "",
    price: 0,
    rating: 0,
    registered: "",
    seller_comments: "",
    seller_email: "",
    seller_hours: "",
    seller_location: "",
    seller_number: "",
    transmission: "",
    type: "",
    year: 0,
  }

  constructor(
    private dialogRef: MatDialogRef<VehicleAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {

  }

  ngOnInit() {
    //this.dialogRef.updateSize('400px');
  }


  close() {
    console.log(this.vehicle.title);
    this.dialogRef.close();
  }

}
