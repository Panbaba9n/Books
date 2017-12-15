import { Component } from '@angular/core';

// export class Hero {
//   name: string;
//   id: number;
//   active?: boolean;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // heroes: Hero[]

  constructor() {

  }

  ngOnInit() {

  }

  // func(): Hero[] {
  //   return this.heroes;
  // }


  // func2(): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     resolve(true)
  //   })
  // }
  title = 'app';


}
