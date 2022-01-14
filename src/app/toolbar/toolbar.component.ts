import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  
  show=false;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showButton(){
    this.show=!this.show;
    this.router.navigateByUrl('/sidebar');
  }

  goTo(){
    this.router.navigateByUrl('/features');
  }



  


}
