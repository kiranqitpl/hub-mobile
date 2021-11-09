import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehicleHoistAddFormPage } from './vehicle-hoist-add-form.page';

describe('VehicleHoistAddFormPage', () => {
  let component: VehicleHoistAddFormPage;
  let fixture: ComponentFixture<VehicleHoistAddFormPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleHoistAddFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleHoistAddFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
