import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'auth-layout-page',
  templateUrl: './layout-page.component.html',
  styles: `

    .grid-container {
      overflow-x: hidden; /* Evita el desbordamiento horizontal */
      padding-right: 0.5rem;
      padding-left: 0.5rem;
      padding-top: 0.5rem;
    }

  `,
})
export class LayoutPageComponent {}
