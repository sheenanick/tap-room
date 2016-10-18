import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "keg",
  pure: false
})
export class KegPipe implements PipeTransform {
  transform(input: Keg[], onlyShowMax) {
    var output: Keg[] = [];
    for(var i = 0; i < input.length; i++) {
      if(input[i].pintsRemaining <= onlyShowMax) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
