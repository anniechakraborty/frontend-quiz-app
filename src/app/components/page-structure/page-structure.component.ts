import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz-service.service';
// import { mockQuiz } from 'src/app/mockQuiz';
// import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-page-structure',
  templateUrl: './page-structure.component.html',
  styleUrls: ['./page-structure.component.scss']
})
export class PageStructureComponent implements OnInit {
  title: string = "Front-end Quiz!";
  setInputText: string = "Welcome to the Frontend Quiz!";
  quiz: any = [];
  selectedQuestion: any = [];
  questionCount: number = 0;
  options: any = {};
  score: number = 0;
  selectedOption: string = '';

  cursor : any;
  // faA = faArrowAltCircleRight;

  // To use a service, we first bring it as a provider to the constructor
  constructor(
    private quizService: QuizService
  ) { 
    console.log("Question Count: " , this.questionCount);
  }

  ngOnInit(): void {
    this.quizService.getQAs().subscribe((quizData) => {
      this.quiz = quizData;
      this.sendQuestion();
      this.questionCount += 1;
      console.log("Question Count: " , this.questionCount);
    });
    this.cursor = document.querySelector('.cursor')
    document.addEventListener('mousemove', (e)=>{
      this.cursor.style.left = e.clientX + 'px';
      this.cursor.style.top = e.clientY + 'px';
    })
  }

  /**
   * Picks a random question from the list and returns a new question as the selectedQuestion
   * @param nextQuestion - boolean , indicates whether the user has requested the next question
   */
  sendQuestion(nextQuestion: boolean = true) {
    if (nextQuestion === true) {
      let index = Math.floor(Math.random() * this.quiz.length);
      console.log("Index : ", index);
      this.selectedQuestion = this.quiz[index];
      this.options = [
        this.quiz[index].opt1,
        this.quiz[index].opt2,
        this.quiz[index].opt3,
        this.quiz[index].opt4
      ]
      // console.log("Question : ", this.selectedQuestion);
      // console.log("Options : ", this.options);
    }
  }


  /**
   * gets the next question from the list
   */
  getNextQuestion() {
    if (this.questionCount <= 5) {
      console.log('User answer : ', this.selectedOption);
      if (this.selectedOption === this.selectedQuestion.answer) {
        this.score += 1;
        console.log('Score : ', this.score);
      }
      else{
        console.log('Wrong answer! ');
      }
      console.log('Getting next question!!');
      this.sendQuestion(true);
      this.questionCount += 1;
      console.log("Question Count: " , this.questionCount);
    }
    else {
      console.log('Getting score : ', this.score);
    }
  }

  /**
   * @param answer : The option selected by the user is set to the global selectedOption variable
   */

  userAnswer(answer: string) {
    this.selectedOption = answer;
  }


}
