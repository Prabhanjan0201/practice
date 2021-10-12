import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

   courses=[{id:1,name:'course 1'},
            {id:2,name:'course 2'},
            {id:3,name:'course 3'}];

  onAdd(){
    this.courses.push({id:4,name:"cou4"})
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  task = {
    title:"engineer",
    assign:null
  }

}
