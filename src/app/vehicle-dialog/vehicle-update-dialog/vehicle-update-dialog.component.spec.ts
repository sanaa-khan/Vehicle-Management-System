import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUpdateDialogComponent } from './vehicle-update-dialog.component';

describe('VehicleUpdateDialogComponent', () => {
  let component: VehicleUpdateDialogComponent;
  let fixture: ComponentFixture<VehicleUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
