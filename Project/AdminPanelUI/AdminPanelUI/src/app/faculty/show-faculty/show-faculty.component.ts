import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-faculty',
  templateUrl: './show-faculty.component.html',
  styleUrls: ['./show-faculty.component.css']
})
export class ShowFacultyComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshFacultyList();
  }

  FacultyList:any=[];

  refreshFacultyList()
  {
    this.service.getFacultyList().subscribe(data=>{
      this.FacultyList=data;
    });
  }

}
