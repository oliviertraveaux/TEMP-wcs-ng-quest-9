import { Component } from '@angular/core';
import { Kitten } from './types/kitten.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kitten-story';
  userKittenList: Kitten[] = [
    {
      name: 'Chadopté',
      race: 'race-chat',
      birthDate: '01/01/1990',
      imageUrl: 'https://placekitten.com/200/150',
    },
  ];
  kittenList: Kitten[] = [
    {
      name: 'Miaous',
      race: 'race-chat',
      birthDate: '01/01/1990',
      imageUrl: 'http://placekitten.com/200/150',
    },
    {
      name: 'Chat 2',
      race: 'race-chat',
      birthDate: '01/01/1990',
      imageUrl: 'http://placekitten.com/200/150',
    },
    {
      name: 'Chat 3',
      race: 'race-chat',
      birthDate: '01/01/1990',
      imageUrl: 'http://placekitten.com/200/150',
    },
  ];
  onReceiveNewKitten(kitten: Kitten) {
    const newKitenList = [...this.kittenList, kitten];
    this.kittenList = newKitenList;
  }
  onReceiveKittenToAdopt(kitten: Kitten) {
    const newKitenListToAdopt = [...this.userKittenList, kitten];
    this.userKittenList = newKitenListToAdopt;
  }
  onReceiveFilteredKittenList(index: number) {
    const newKittenList = this.kittenList.filter((kitten, i) => i !== index);
    console.log('from list-kittent, kitten list filtered', newKittenList);
    this.kittenList = newKittenList;
    console.log('from app, userKittenList', this.userKittenList);
  }
}
