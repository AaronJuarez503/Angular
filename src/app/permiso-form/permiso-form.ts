import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-permiso-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './permiso-form.html',
  styleUrl: './permiso-form.css'
})
export class PermisoForm {

  empleado = 'Aaron Juarez';
  area = 'Desarrollo';
  fecha = new Date().toISOString().split('T')[0];
  motivo = '';

  enviar() {
    console.log('Empleado:', this.empleado);
    console.log('Área:', this.area);
    console.log('Fecha:', this.fecha);
    console.log('Motivo:', this.motivo);
    alert('✅ Permiso enviado correctamente');
  }
}
