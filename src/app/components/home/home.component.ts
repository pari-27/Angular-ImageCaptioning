import { Component, OnInit } from '@angular/core';
import { State } from '@progress/kendo-data-query';

import {GridDataResult,DataStateChangeEvent} from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ServerData: any;
  public view: Observable<GridDataResult>;
  public columns: any[] = [{field: "id"}, {field: "tag"}, {field: "text"}];
  public gridData: any = this.ServerData;
  public state: State = {
      skip: 0,
      take: 5
  };

  constructor() { }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
   
}

  ngOnInit(): void {

    this.ServerData = [{"id":1,"tag":"quotes","text":"quotes lies here"},
    {"id":1,"tag":"quotes","text":"quotes lies here"},
    {"id":1,"tag":"quotes","text":"quotes lies here"},
    {"id":1,"tag":"quotes","text":"quotes lies here"},
    {"id":1,"tag":"quotes","text":"quotes lies here"},
    {"id":1,"tag":"quotes","text":"quotes lies here"}
  
    ];

    this.gridData= this.ServerData;
   

}
}