import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuestionI } from '../Models/questioninteerface';
@Injectable({
  providedIn: 'root'
})
export class QuestionsServiceService {
Url_Api = 'https://api.npoint.io/f0cb3a708873fb2b3012';
  constructor(private http: HttpClient) { }

  public getquestions(){
  return this.http.get<QuestionI>(this.Url_Api);
  }
}
