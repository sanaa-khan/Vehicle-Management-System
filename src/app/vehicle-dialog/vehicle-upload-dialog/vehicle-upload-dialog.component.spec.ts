import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUploadDialogComponent } from './vehicle-upload-dialog.component';

describe('VehicleUploadDialogComponent', () => {
  let component: VehicleUploadDialogComponent;
  let fixture: ComponentFixture<VehicleUploadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleUploadDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
