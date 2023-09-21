import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kitten } from 'src/app/types/kitten.interface';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
})
export class ListKittenComponent {
  @Input() kittenList: Kitten[] = [];
  @Input() isAdoptActive?: boolean;
  @Output() sendKittenToUserList: EventEmitter<Kitten> = new EventEmitter();
  @Output() updateKittenList: EventEmitter<number> = new EventEmitter();

  trackByIndex(index: number) {
    return index;
  }

  onReceiveKitten(index: number) {
    console.log('from list-kittent, kitten', this.kittenList[index]);
    this.sendKittenToUserList.emit(this.kittenList[index]);
    this.updateKittenList.emit(index);
  }
}
