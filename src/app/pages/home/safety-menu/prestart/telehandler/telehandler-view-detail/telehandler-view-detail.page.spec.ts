import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelehandlerViewDetailPage } from './telehandler-view-detail.page';

describe('TelehandlerViewDetailPage', () => {
  let component: TelehandlerViewDetailPage;
  let fixture: ComponentFixture<TelehandlerViewDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TelehandlerViewDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelehandlerViewDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
