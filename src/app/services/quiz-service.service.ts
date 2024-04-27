import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { mockQuiz } from 'src/app/mockQuiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl = 'http://localhost:5000/questions';
  constructor(
    private http: HttpClient
  ) { }

  getQAs () : Observable<any>{
    // let quiz = of(mockQuiz);
    let quiz = this.http.get(this.apiUrl);
    return quiz;
  }
}
