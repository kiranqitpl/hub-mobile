import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-telehandler-add-form',
  templateUrl: './telehandler-add-form.page.html',
  styleUrls: ['./telehandler-add-form.page.scss'],
})
export class TelehandlerAddFormPage implements OnInit {
  pName: String = 'Telehandler'
  teleHandlerForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.teleHandlerForm = this.fb.group({

      telehandler_number: [''],

      hour_meter: [''],

      data_plate: [''],
      data_plate_comment: [''],
      data_plate_image: [''],

      engine_oil: [''],
      engine_oil_comment: [''],
      engine_oil_image: [''],

      hydraulic_oil: [''],
      hydraulic_oil_comment: [''],
      hydraulic_oil_image: [''],

      fuel_level: [''],

      equipment_inspect: [''],
      equipment_inspect_comment: [''],
      equipment_inspect_image: [''],

      coolant_level: [''],
      coolant_level_comment: [''],
      coolant_level_image: [''],

      belts_and_hoses: [''],
      belts_and_hoses_comment: [''],
      belts_and_hoses_image: [''],

      wheels_tyres: ['', Validators.required],
      wheels_tyres_comment: [''],
      wheels_tyres_image: [''],

      fire_extinguisher: ['', Validators.required],
      fire_extinguisher_comment: [''],
      fire_extinguisher_image: [''],

      fuel_flash: ['', Validators.required],
      fuel_flash_comment: [''],
      fuel_flash_image: [''],

      hydraulics_functional: ['', Validators.required],
      hydraulics_functional_comment: [''],
      hydraulics_functional_image: [''],

      lift_arms: ['', Validators.required],
      lift_arms_comment: [''],
      lift_arms_image: [''],

      chain_hose: ['', Validators.required],
      chain_hose_comment: [''],
      chain_hose_image: [''],

      cap_bolts: ['', Validators.required],
      cap_bolts_comment: [''],
      cap_bolts_image: [''],

      safety_stops: ['', Validators.required],
      safety_stops_comment: [''],
      safety_stops_image: [''],

      forks: ['', Validators.required],
      forks_comment: [''],
      forks_image: [''],

      overhead_guards: ['', Validators.required],
      overhead_guards_comment: [''],
      overhead_guards_image: [''],

      counterweight: ['', Validators.required],
      counterweight_comment: [''],
      counterweight_image: [''],

      engine_bay_components: ['', Validators.required],
      engine_bay_components_comment: [''],
      engine_bay_components_image: [''],

      horn: ['', Validators.required],
      horn_comment: [''],
      horn_image: [''],

      audible: ['', Validators.required],
      audible_comment: [''],
      audible_image: [''],

      headlights: ['', Validators.required],
      headlights_comment: [''],
      headlights_image: [''],

      turn_signals: ['', Validators.required],
      turn_signals_comment: [''],
      turn_signals_image: [''],

      warning_brake_lights: ['', Validators.required],
      warning_brake_lights_comment: [''],
      warning_brake_lights_image: [''],

      foot_brake: ['', Validators.required],
      foot_brake_comment: [''],
      foot_brake_image: [''],

      parking_brake: ['', Validators.required],
      parking_brake_comment: [''],
      parking_brake_image: [''],

      clutch_gear_shift: ['', Validators.required],
      clutch_gear_shift_comment: [''],
      clutch_gear_shift_image: [''],

      engine_noise: ['', Validators.required],
      engine_noise_comment: [''],
      engine_noise_image: [''],

      dash_gauges: ['', Validators.required],
      dash_gauges_comment: [''],
      dash_gauges_image: [''],

      operational_controls: ['', Validators.required],
      operational_controls_comment: [''],
      operational_controls_image: [''],

      fluid_leaks: ['', Validators.required],
      fluid_leaks_comment: [''],
      fluid_leaks_image: [''],

      first_aid_kit: ['', Validators.required],
      first_aid_kit_comment: [''],
      first_aid_kit_image: [''],

      comment: [''],
    })
  }

  get errorControls() {
    return this.teleHandlerForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.teleHandlerForm.valid) {
      console.log('submit value 1');
    } else {
      console.log('submit value 2');
      return false;
    }
  }

}
