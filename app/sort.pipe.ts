import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(input: Keg[], sortBy, order) {
    if(order) {
      if (sortBy === 'name') {
        input.sort(function(a, b){
          if(a.name < b.name){
           return -1;
          } else if (a.name > b.name){
            return 1;
          } else {
            return 0;
          }
        });
      } else if (sortBy === 'brand') {
        input.sort(function(a, b){
          if(a.brand < b.brand){
           return -1;
         } else if (a.brand > b.brand){
            return 1;
          } else {
            return 0;
          }
        });
      } else if (sortBy === 'price') {
        input.sort(function(a, b){return a.price-b.price});
      } else if (sortBy === 'alcoholContent') {
        input.sort(function(a, b){return a.alcoholContent-b.alcoholContent});
      } else if (sortBy === 'pintsRemaining') {
        input.sort(function(a, b){return a.pintsRemaining-b.pintsRemaining});
      } else {
        input.sort(function(a, b){return a.date.getTime() - b.date.getTime()});
      }
    } else {
      if (sortBy === 'name') {
        input.sort(function(a, b){
          if(a.name < b.name){
           return 1;
          } else if (a.name > b.name){
            return -1;
          } else {
            return 0;
          }
        });
      } else if (sortBy === 'brand') {
        input.sort(function(a, b){
          if(a.brand < b.brand){
           return 1;
         } else if (a.brand > b.brand){
            return -1;
          } else {
            return 0;
          }
        });
      } else if (sortBy === 'price') {
        input.sort(function(a, b){return b.price-a.price});
      } else if (sortBy === 'alcoholContent') {
        input.sort(function(a, b){return b.alcoholContent-a.alcoholContent});
      } else if (sortBy === 'pintsRemaining') {
        input.sort(function(a, b){return b.pintsRemaining-a.pintsRemaining});
      } else {
        input.sort(function(a, b){return b.date.getTime() - a.date.getTime()});
      }
    }


   return input;
  }
}
