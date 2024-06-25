import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Asegúrate de que standalone esté configurado correctamente si es necesario
})
export class AppComponent {
  title = 'car-store-frontend';
}
