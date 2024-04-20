import { Component } from '@angular/core';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.scss']
})
export class OptionListComponent {
  startQuiz(){
    console.log('Starting Quiz!!');
  }
}
