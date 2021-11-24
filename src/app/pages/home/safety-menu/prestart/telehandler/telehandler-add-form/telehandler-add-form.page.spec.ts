import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelehandlerAddFormPage } from './telehandler-add-form.page';

describe('TelehandlerAddFormPage', () => {
  let component: TelehandlerAddFormPage;
  let fixture: ComponentFixture<TelehandlerAddFormPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TelehandlerAddFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelehandlerAddFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
