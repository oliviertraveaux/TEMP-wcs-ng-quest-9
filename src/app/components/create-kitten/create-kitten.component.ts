import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Kitten } from 'src/app/types/kitten.interface';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
})
export class CreateKittenComponent {
  @Output() sendKittenToParent: EventEmitter<Kitten> = new EventEmitter();

  private fb = inject(FormBuilder);
  createKittenForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    race: ['', [Validators.required, Validators.minLength(2)]],
    birthDate: ['', Validators.required],
    imageUrl: [''],
  });

  isSubmitted: boolean = false;

  isFieldValid(fieldName: string): boolean | undefined {
    const control = this.createKittenForm.get(fieldName);
    return (
      control?.valid && (control.dirty || control.touched || this.isSubmitted)
    );
  }

  isFieldInvalid(fieldName: string): boolean | undefined {
    const control = this.createKittenForm.get(fieldName);
    return (
      control?.invalid && (control.dirty || control.touched || this.isSubmitted)
    );
  }

  getErrorMessage(name: string) {
    const control = this.createKittenForm.get(name);
    if (
      control &&
      control.hasError('required') &&
      (control.dirty || control.touched || this.isSubmitted)
    ) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} requis`;
    }
    return '';
  }

  onSubmit() {
    const formValue = this.createKittenForm.value;
    const kitten: Kitten = {
      name: formValue.name || '',
      race: formValue.race || '',
      birthDate: formValue.birthDate || '',
      imageUrl: formValue.imageUrl || '',
    };
    console.log(kitten);

    this.sendKittenToParent.emit(kitten);
    this.isSubmitted = true;
  }
}
