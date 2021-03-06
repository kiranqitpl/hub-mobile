import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { HTTP } from '@ionic-native/http/ngx';
// import { PdfViewerModule } from 'ng2-pdf-viewer'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { HeaderComponent } from './shared-component/header/header.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // PdfViewerModule,
    // CommonModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    Camera,
    File,
    Base64,
    HTTP,
    // HeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
