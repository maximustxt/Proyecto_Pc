import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNombreFiltros',
})
// Pipe para convertir palabras con la primera letra en mayuscula y el resto minuscula:
export class PipeNombreFiltrosPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value[0].toLocaleUpperCase() + value.slice(1).toLocaleLowerCase();
  }
}
