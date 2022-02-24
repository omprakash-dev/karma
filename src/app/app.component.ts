import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { RouterOutlet } from '@angular/router';
import audits from './result.json';
//import audits from './result3.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;


  testCo2 () {
              let keyArr: any[] = Object.keys(audits);
              console.log('keyArr'+keyArr[8]);
              console.log('audits'+JSON.stringify(audits[keyArr[8]]));
              console.log('network-requests'+audits[keyArr[8]]['network-requests']['details']['items']);
               let itemsArr: any[]  = audits[keyArr[8]]['network-requests']['details']['items'];
                var totalBytes = 0;
                             itemsArr.forEach((item: any) => {
                                var itemData:any = JSON.stringify(item);
                                console.log('itemData'+itemData);
                                console.log('transferSize'+JSON.stringify(item.transferSize));

                                var numberValue: number = +JSON.stringify(item.transferSize);
                                totalBytes += numberValue;
                             });
                             console.log('totalBytes \n'+totalBytes);

                             var bytes: number = (totalBytes * 0.75) + (0.02 * totalBytes * 0.25);

                             var energy: number = bytes * (1.805 / 1073741824);

                             var co2: number = energy * 475;

                             var co2Renewable: number = ((energy * 0.1008) * 33.4) + ((energy * 0.8992) * 475);
                             console.log('co2 \n' +co2Renewable);
          };
}
