import { Component, OnInit } from '@angular/core';

interface User{
  id:number,
  name:string,
  number:string,
  time:string
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  users:Array<User>;
  constructor() {
    this.loadUsersData();
  }
  sortUsers(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

      let ret =0 ;
      this.users.sort(function(a, b) {
        if (a.id > b.id) {
        ret=1;
      }
      if (a.id < b.id) {
      ret= -1;
      }
      if(type =='desc'){
        ret=ret > 0? -1 : 1;
      }
      return ret;
    }
  )
}
  mySort() {
    let t:User;
    for(let i = 0; i < this.users.length; i++) {
    let rand = parseInt(String(Math.random() * this.users.length));
    t = this.users[rand];
    this.users[rand] = this.users[i];
    this.users[i] = t;
  }
}
  loadUsersData(){
    this.users = [
      {id:1,name:"Chanel",number:"100",time:"20171212"},
      {id:2,name:"MISSAH",number:"300",time:"20171221"},
      {id:3,name:"Givenchy",number:"50",time:"20171230"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      id:Number(uuid),
      name:"SEPHORA",
      number:"30",
      time:"20171112"
    }
    this.users.push(newUser);
  }
  deleteUserByID(id){
    this.users.forEach((user,index,arr)=>{
      if(user.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
