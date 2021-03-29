import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})
export class AppComponent {
  appservice: AppService;
  movieObject: any;
  movieObj: any;
  constructor (private _appservice: AppService){ 
    this.appservice = _appservice;
  }

  ngOnInit() : void  { 
    
  }

  onSubmit() {
    this.appservice.onSubmit().subscribe( (movieobject) => {
      this.movieObj = movieobject;
    })
  }

  getInput(input: any) { 
    this.appservice.moviename = input;
  };
  
}
  
  
