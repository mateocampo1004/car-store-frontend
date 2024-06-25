// car-form.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent {
  carForm: FormGroup;

  constructor(private fb: FormBuilder, private carService: CarService) {
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required]
      // Agrega más campos según tus necesidades
    });
  }

  submitForm(): void {
    if (this.carForm.valid) {
      const carData = this.carForm.value;
      this.carService.createCar(carData).subscribe(
        () => {
          console.log('Car created successfully.');
          this.carForm.reset();
          // Puedes redirigir o actualizar la lista después de crear el carro
        },
        (error) => {
          console.error('Error creating car:', error);
        }
      );
    }
  }
}
