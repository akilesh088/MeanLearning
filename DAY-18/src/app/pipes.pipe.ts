import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // name: 'pipes',
  name: 'smartTitlecase',
  standalone: false,
  // pure:false
})
export class PipesPipe implements PipeTransform {

  // transform(value: string): string {
  //   if(!value)
  //   return '';

  //   return value.split(' ')
  //   .map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
  //   .join(' ');
  // }

  // transform(items:any[],searchText:string):any[]{
  //   if(!items||!searchText) return items;
  //   searchText=searchText.toLowerCase();
  //   return items.filter(item=>item.name.toLowerCase().includes(searchText));
  // }

  // transform(user: { name: string }): string {
  //   console.log('Pure Pipe Executed');
  //   return user.name.toUpperCase();
  // }
  // transform(items: string[], search: string): string[] {
  //   console.log('Impure Pipe Executed');
  //   return items.filter(item => item.includes(search));
  // }

  // transform(str:string):string{
  //   return str.toUpperCase();
  // }
  transform(value: string): string {
    if (!value) return value;

    const lowercaseWords = ['of', 'the', 'in', 'and', 'or', 'on'];
    return value
      .toLowerCase()
      .split(' ')
      .map((word, index) => 
        lowercaseWords.includes(word) && index !== 0 
          ? word 
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(' ');
  }
}


