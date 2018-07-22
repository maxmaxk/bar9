import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-tank',
  templateUrl: './new-tank.component.html',
  styleUrls: ['./new-tank.component.css']
})
export class NewTankComponent implements OnInit {
	
  currentPage=1;
  readonly totalPages=3;

  constructor() { }

  ngOnInit() {
  }
  
  leftClick(){
	  if(this.currentPage>1) this.currentPage--;
  }
  
  rightClick(){
	  if(this.currentPage<this.totalPages) this.currentPage++;
  }


}
