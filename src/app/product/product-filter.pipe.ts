import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  // parametrede aradıgımız ıfade product arry objesı gerıye donus olarak da abje doner string ise aradıgımız objeyı strıng bır elemanla aradıgımızdan kaynaklı
  transform(value: Product[], filterText?: string): Product[] {

    // aradıgıgımız ıfadeyı once kucuk harfe donuduruyoruz lakın aradıgımız ıfade varmı dıye kontrol ederız oda filterText? varmı dıye once sorgularız yoksa null deger doner
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText ? value.filter((p: Product) => p.name.toLocaleLowerCase().indexOf("filterText") !== -1) : value;
  }

}
