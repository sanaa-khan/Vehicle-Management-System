import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {VehicleDetailsDialogComponent} from "./vehicle-dialog/vehicle-details-dialog/vehicle-details-dialog.component";
import {VehicleAddDialogComponent} from "./vehicle-dialog/vehicle-add-dialog/vehicle-add-dialog.component";
import {VehicleUpdateDialogComponent} from "./vehicle-dialog/vehicle-update-dialog/vehicle-update-dialog.component";
import {Title} from "@angular/platform-browser";

export interface VEHICLE {
  _id: any;
  title: string;
  img_path: string;
  price: number;
  location: string;
  date: number;
  rating: number;
  make: string;
  type: string;
  model: string;
  year: number;
  transmission: string;
  mileage: number;
  color: string;
  registered: string;
  assembly: string;
  engine_capacity: string;
  last_updated: string;
  features: string;
  condition: number;
  seller_number: string;
  seller_email: string;
  seller_location: string;
  seller_hours: string;
  seller_comments: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Vehicle Market';
  selectedCity: string = '';
  selectedMake: string = '';
  selectedPriceRange: number | undefined;
  selectedYear: number | undefined;
  selectedMileage: number | undefined;
  selectedColor: string = '';
  selectedEngCap: string = '';
  selectedType: string = '';
  selectedRating: number | undefined;

  vehicles: VEHICLE[] = [];
  allVehicles: VEHICLE[] = [];

  constructor(
    private viewDialog: MatDialog,
    private updateDialog: MatDialog,
    private  addDialog: MatDialog,
    private titleService: Title) {

    this.titleService.setTitle("Vehicle Market");
    this.getAllVehicles();
  }

  ngOnInit(): void {
  }

  // get all vehicle data from database and populate the vehicle array
  getAllVehicles(): void {

    this.vehicles = [];

    const requestOptions = {
      method: 'GET',
    };

    fetch('http://localhost:3000/getAllVehicles', requestOptions)
      .then(response => response.text())
      .then(result => {
        this.vehicles = JSON.parse(result);
        this.allVehicles = this.vehicles;
      })
      .catch(error => console.log('Error: ', error));
  }

  // search through vehicles with the chosen filters
  filterVehicles() {
    console.log(this.selectedCity);
    console.log(this.selectedMake);
    console.log(this.selectedPriceRange);
    console.log(this.selectedYear);
    console.log(this.selectedMileage);
    console.log(this.selectedColor);
    console.log(this.selectedEngCap);
    console.log(this.selectedType);
    console.log(this.selectedRating);

    this.vehicles = this.allVehicles;

    if (this.selectedCity.length > 0) {
      this.vehicles = this.vehicles.filter((val) => val.location.toLowerCase().includes(this.selectedCity.toLowerCase()));
    }

    if (this.selectedMake.length > 0) {
      this.vehicles = this.vehicles.filter((val) => val.make.toLowerCase().includes(this.selectedMake.toLowerCase()));
    }

    if (this.selectedPriceRange != 0 && this.selectedPriceRange != undefined) {
      // @ts-ignore
      this.vehicles = this.vehicles.filter((val) => val.price <= this.selectedPriceRange);
    }

    if (this.selectedYear != 0 && this.selectedYear != undefined) {
      this.vehicles = this.vehicles.filter((val) => val.year == this.selectedYear);
    }

    if (this.selectedMileage != 0 && this.selectedMileage != undefined) {
      // @ts-ignore
      this.vehicles = this.vehicles.filter((val) => val.mileage <= this.selectedMileage);
    }

    if (this.selectedColor.length > 0) {
      this.vehicles = this.vehicles.filter((val) => val.color.toLowerCase().includes(this.selectedColor.toLowerCase()));
    }

    if (this.selectedEngCap.length > 0) {
      this.vehicles = this.vehicles.filter((val) => val.engine_capacity.toLowerCase().includes(this.selectedEngCap.toLowerCase()));
    }

    if (this.selectedType.length > 0) {
      this.vehicles = this.vehicles.filter((val) => val.type.toLowerCase().includes(this.selectedType.toLowerCase()));
    }

    if (this.selectedRating != 0 && this.selectedRating != undefined) {
      this.vehicles = this.vehicles.filter((val) => val.rating == this.selectedRating);
    }

  }

  // view details of a vehicle
  openDetailsDialog(selectedVehicle: VEHICLE) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;

    dialogConfig.data = {
      vehicle: selectedVehicle
    };

    this.viewDialog.open(VehicleDetailsDialogComponent, dialogConfig);
  }

  // update a vehicle
  openUpdateDialog(selectedVehicle: VEHICLE) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;

    dialogConfig.data = {
      vehicle: selectedVehicle
    };

    let dialogRef = this.viewDialog.open(VehicleUpdateDialogComponent, dialogConfig);

    // refresh vehicles
    dialogRef.afterClosed().subscribe(res => {
      this.getAllVehicles();
    })
  }

  // add a vehicle
  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;

    let dialogRef = this.viewDialog.open(VehicleAddDialogComponent, dialogConfig);

    // refresh vehicles
    dialogRef.afterClosed().subscribe(res => {
      this.getAllVehicles();
    })
  }

  // delete a vehicle
  deleteVehicle(selectedVehicle: VEHICLE) {

    const requestOptions = {
      method: 'POST',
    };

    fetch('http://localhost:3000/deleteVehicle?id=' + selectedVehicle._id, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        this.getAllVehicles();
      })
      .catch(error => console.log('error', error));
  }
}
