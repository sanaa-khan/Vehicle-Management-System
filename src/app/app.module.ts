import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from "@angular/material/dialog";
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from "@angular/material/grid-list";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

import { VehicleDetailsDialogComponent } from './vehicle-dialog/vehicle-details-dialog/vehicle-details-dialog.component';
import { VehicleAddDialogComponent } from './vehicle-dialog/vehicle-add-dialog/vehicle-add-dialog.component';
import { VehicleUpdateDialogComponent } from './vehicle-dialog/vehicle-update-dialog/vehicle-update-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailsDialogComponent,
    VehicleAddDialogComponent,
    VehicleUpdateDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VehicleDetailsDialogComponent, VehicleAddDialogComponent, VehicleDetailsDialogComponent]
})
export class AppModule { }
