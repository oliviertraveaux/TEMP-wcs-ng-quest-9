import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from 'src/app/types/kitten.interface';

@Component({
  selector: 'app-card-kitten',
  templateUrl: './card-kitten.component.html',
  styleUrls: ['./card-kitten.component.scss'],
})
export class CardKittenComponent {
  @Input() isAdoptActive?: boolean;
  @Input() kitten?: Kitten;
  @Input() index?: number;
  @Output() sendKittenToParent: EventEmitter<number> = new EventEmitter();
  showKittenInfos: boolean = false;

  adoptKitten() {
    console.log('index from card', this.index);
    this.sendKittenToParent.emit(this.index);
  }
}
