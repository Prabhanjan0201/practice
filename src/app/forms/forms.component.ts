import { Component} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

log(x){console.log(x);
}

submit(f){
  console.log(f);

}

}
