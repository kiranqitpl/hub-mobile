import { Injectable, } from '@angular/core';
import { GlobalService } from '../global-service/global.service';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  notViewNotiCount: any = 0;

  //------------------------------------------------------------------ Global Variable -------------------------------------------------------//

  prestartMenu = [
    {
      menuName: 'LV', route: '#', favorite: false, position_in_list: 1
    },
    {
      menuName: 'Forklift', route: '#', favorite: false, position_in_list: 2
    },
    {
      menuName: 'Telehandler', route: '/home/safety-menu/telehandler-add-form', favorite: false, position_in_list: 3
    },
    {
      menuName: 'Crane', route: '/home/safety-menu/crane-add-form', favorite: false, position_in_list: 4
    },
    {
      menuName: 'Vehicle Hoist', route: '/home/safety-menu/vehicle-hoist-add-form', favorite: false, position_in_list: 5
    },
  ];

  //------------------------------------------------------------------ Global Variable -------------------------------------------------------//

  constructor(
    private globalService: GlobalService,
    public actionSheetController: ActionSheetController,
    public camera: Camera
  ) { }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  // fileToBase64 = (file) => {
  //   let image: any;
  //   let reader = new FileReader();
  //   reader.onload = (function (file) {
  //     return function (e) {
  //       image = e.target.result;
  //       this.base64Image = e.target.result;
  //     };
  //   })(file);
  //   reader.readAsDataURL(file);
  // };

  // convertDataURIToBinary(dataURI) {
  //   var BASE64_MARKER = ';base64,';
  //   var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  //   var base64 = dataURI.substring(base64Index);
  //   var raw = window.atob(base64);
  //   var rawLength = raw.length;
  //   var array = new Uint8Array(new ArrayBuffer(rawLength));
  //   for (let i = 0; i < rawLength; i++) {
  //     array[i] = raw.charCodeAt(i);
  //   }
  //   return array;
  // }

  async mobileUploadImages() {
    let images: any;
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            return images = this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          },
        },
        {
          text: 'Use Camera',
          handler: () => {
            return images = this.pickImage(this.camera.PictureSourceType.CAMERA);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  async pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    await this.camera.getPicture(options).then(
      (imageData) => {
        console.log('imageData', imageData);
        // const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
        let image = 'data:image/jpeg;base64,' + imageData;
        console.log('pickImage', image);
        return image;
      },
      (err) => {
        console.log("errOf Image ", err)
      }
    );
  }
}
