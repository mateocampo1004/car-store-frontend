// car-list.component.ts

import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: any[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getAllCars().subscribe(
      (data) => {
        this.cars = data;
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }

  deleteCar(id: number): void {
    this.carService.deleteCar(id).subscribe(
      () => {
        console.log(`Car with id ${id} deleted successfully.`);
        // Actualiza la lista después de eliminar
        this.loadCars();
      },
      (error) => {
        console.error(`Error deleting car with id ${id}:`, error);
      }
    );
  }
}
