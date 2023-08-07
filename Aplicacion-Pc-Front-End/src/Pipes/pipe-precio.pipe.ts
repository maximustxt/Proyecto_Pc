import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrecio',
})
// Pipe para agregar el icono de singo dolar en cada precio:
export class PipePrecioPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return 'US$' + ' ' + value;
  }
}
