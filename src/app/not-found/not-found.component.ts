import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div style="
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;"
    >
      <img src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif">
    </div>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

}
