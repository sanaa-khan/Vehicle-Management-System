import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { VEHICLE } from '../../app.component';

@Component({
  selector: 'app-vehicle-update-dialog',
  templateUrl: './vehicle-update-dialog.component.html',
  styleUrls: ['./vehicle-update-dialog.component.css']
})
export class VehicleUpdateDialogComponent implements OnInit {

  public vehicle: VEHICLE;
  public attributeToUpdate: string;
  public valueToUpdate: any;

  constructor(
    private dialogRef: MatDialogRef<VehicleUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {

    this.vehicle = data.vehicle;
    this.attributeToUpdate = "";
    this.valueToUpdate = "";
  }

  ngOnInit(): void {
    this.dialogRef.updateSize("570px");
  }

  update() {
    let jsonObj = {
      attribute: this.attributeToUpdate,
      value: this.valueToUpdate
    };

    // cast json object to string so it can be sent to API
    let jsonObjString = JSON.stringify(jsonObj);

    const requestOptions = {
      method: 'POST',
    };

    // send request to API
    fetch('http://localhost:3000/updateVehicle?id=' + this.vehicle._id + "&toupdate=" + jsonObjString, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
      })
      .catch(error => console.log('error', error));

    // close dialog
    this.dialogRef.close();
  }

}
