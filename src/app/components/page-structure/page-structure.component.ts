import { Component, OnInit } from '@angular/core';
import { mockQuiz } from 'src/app/mockQuiz';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-page-structure',
  templateUrl: './page-structure.component.html',
  styleUrls: ['./page-structure.component.scss']
})
export class PageStructureComponent implements OnInit{
  title: string = "Front-end Quiz!";
  setInputText : string = "Welcome to the Frontend Quiz!";

  quiz = mockQuiz;
  selectedQuestion : any = [];
  options : any = {};

  faA = faArrowAltCircleRight;

  selectedAnswer : any;

  ngOnInit(): void {
    this.sendQuestion();
  }

  /**
   * Picks a random question from the list and returns a new question as the selectedQuestion
   * @param nextQuestion - boolean , indicates whether the user has requested the next question
   */
  sendQuestion(nextQuestion : boolean = true){
    if(nextQuestion === true){
      let index = Math.floor(Math.random()*this.quiz.length);
      console.log("Index : ", index);
      this.selectedQuestion = this.quiz[index];
      this.options = [
        this.quiz[index].opt1,
        this.quiz[index].opt2,
        this.quiz[index].opt3,
        this.quiz[index].opt4
      ]
      console.log("Question : ", this.selectedQuestion);
      console.log("Options : ", this.options);
    }
  }

  
  getNextQuestion(){
    console.log('Getting next question!!');
    this.sendQuestion(true);
  }

  userAnswer(){

  }

  
}
