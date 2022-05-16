import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsDialogComponent } from './vehicle-details-dialog.component';

describe('VehicleDialogComponent', () => {
  let component: VehicleDetailsDialogComponent;
  let fixture: ComponentFixture<VehicleDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
