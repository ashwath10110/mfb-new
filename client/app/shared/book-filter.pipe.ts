import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookfilter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  // transform(items: any[], filter: any): any[] {
  //   if (!items || !filter) {
  //     return items;
  //   }
  //   // filter items array, items which match and return true will be kept, false will be filtered out
  //   return items.filter((item: any) => this.applyFilter(item, filter));
  // }

  transform(value: any[], filter: string): any[] {
    filter = filter ? filter.toLocaleLowerCase() : '';
    return filter && value ?
      value.filter(product =>
        (product.name.toLocaleLowerCase().indexOf(filter) !== -1) ||
        (product.nameForTelugu.toLocaleLowerCase().indexOf(filter) !== -1)||
        (product.nameForHindi.toLocaleLowerCase().indexOf(filter) !== -1)
      ) :
      value;
  }

  /**
   * Perform the filtering.
   * 
   * @param {Book} book The book to compare to the filter.
   * @param {Book} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(book: any, filter: any): boolean {
    debugger;
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          debugger;
          if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (book[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}