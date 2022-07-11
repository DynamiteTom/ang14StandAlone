
import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core'; 
// OnChanges, SimpleChanges } 

@Component({  
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule ],
  template: '<h1 style="color: blue">Ang14 G   StandAlone Blue</h1>'
})
export class AppComponent implements OnInit{
  title = 'ang14StandAlone A';

  ngOnInit(){

  }
/*
  ngOnChanges(changes: SimpleChanges){

  }
  */
}
