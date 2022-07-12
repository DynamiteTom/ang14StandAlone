
import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core'; 
// OnChanges, SimpleChanges } 

@Component({  
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule ],
  template: '<h1 style="color: blue">Ang14 R StandAlone No Modules Blue</h1>'
})
export class AppComponent {
  title = 'ang14StandAlone A';

}
