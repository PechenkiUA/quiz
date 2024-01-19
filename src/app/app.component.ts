import { Component } from '@angular/core';
import {Quiz} from "ngx-quiz";
// @ts-ignore
import questions from './questions.json';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IOC-SurveyJS';

  quiz: Quiz = {
    name: 'Питання генерував Chat GPT я не винен',
    level: 'У вас ',
    duration: 480,
    automaticAdvance: false,
    returnAllowed: true,
    repeatAllowed: true,
    emitReport: true,
    startScreen: {
      title: '',
      description: '',
      displayImage:
        'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/04/ai-generated-gba2dce9e3_1920_xMPNobD.jpg',
      buttonText: 'Поїхати'
    },
    endScreen: {
      title: 'Ой молодець',
      description: 'Завершено',
      displayImage:
        'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/04/ai-generated-gba2dce9e3_1920_xMPNobD.jpg',
      buttonText: 'Знову'
    },
    questions:  questions
  };
}
