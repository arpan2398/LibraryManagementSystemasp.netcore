import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-issue',
  templateUrl: './show-issue.component.html',
  styleUrls: ['./show-issue.component.css']
})
export class ShowIssueComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshIssueList();
  }

  IssueList:any=[];
  Modaltitle?:string;
  ActivateAddEditIssue:boolean=false;
  issue:any;
  addClick()
  {
    this.issue={
      issueId:0,
      studentId:0,
      bookId:0,
      message:""
    }
    this.Modaltitle="Add Issue ";
    this.ActivateAddEditIssue=true;

  }
  closeClick(){
    this.ActivateAddEditIssue=true;
    this.refreshIssueList();
  }
  deletelick(item:any)
  {
    if(confirm("are you sure want to delete this issue?"))
    {
      this.service.deleteIssue(item.issueId).subscribe(data=>{
        alert(data.toString());
        this.refreshIssueList();
      });
    }
  }

  editClick(item:any)
  {
    this.issue=item;
    this.Modaltitle="Edit Issue ";
    this.ActivateAddEditIssue=true;
  }
  refreshIssueList()
  {
    this.service.getIssueList().subscribe(data=>{
      this.IssueList=data;
    });
  }


}
