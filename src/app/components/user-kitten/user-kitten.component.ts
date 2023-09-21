import { Component, Input } from '@angular/core';
import { Kitten } from 'src/app/types/kitten.interface';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
})
export class UserKittenComponent {
  @Input() userKittenList: Kitten[] = [];
  // isAdoptActive: boolean = false;
}
