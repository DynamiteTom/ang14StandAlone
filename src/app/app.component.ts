import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule ],
  template: '<h1 style="color: blue">Ang14 StandAlone Blue</h1>'
})
export class AppComponent {
  title = 'ang14StandAlone';
}
