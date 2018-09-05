import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from "@angular/platform-browser";
@Pipe({
  name: 'pipsafe'
})
export class PipsafePipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){}
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}







// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'pipsafe'
// })
// export class PipsafePipe implements PipeTransform {

//   transform(value: any, args?: any): any {
//     return null;
//   }

// }
