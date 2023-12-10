import { Component, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-alta-cliente',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})

export class AltaClienteComponent {

  GrupoForm = new FormGroup({
    nombre: new FormControl(''),
    cif: new FormControl(''),
    direccion: new FormControl(''),
    sangre: new FormControl('')
  });

  @ViewChild("formNombre")
  formNombre!: ElementRef;

  @ViewChild("formCif")
  formCIF!: ElementRef;

  @ViewChild("formDir")
  formDirection!: ElementRef;

  @ViewChild("formSangre")
  formGroup!: ElementRef;

  @Output() enviar: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() {
    
  }
 
  ngOnInit() {
  }

  send_info = (): void => {
    let formData: string[] = [];
    formData.push(this.formNombre.nativeElement.value);
    formData.push(this.formCIF.nativeElement.value);
    formData.push(this.formDirection.nativeElement.value);
    formData.push(this.formGroup.nativeElement.value);
    this.enviar.emit(formData);
    this.GrupoForm.reset();
  }
}
