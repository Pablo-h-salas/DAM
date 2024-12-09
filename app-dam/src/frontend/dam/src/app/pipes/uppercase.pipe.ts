import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: true
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // Verificar si el valor es un string antes de aplicar la transformación
    if (typeof value === 'string') {
      return value.toUpperCase(); // Convertimos el texto a mayúsculas
    }
    return value; // Si no es una cadena, devolvemos el valor tal como está
  }

}
