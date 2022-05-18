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
    console.log(this.attributeToUpdate, this.valueToUpdate);
    this.dialogRef.close();
  }

}
