import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxQuizComponent, Quiz} from "ngx-quiz";
// @ts-ignore
import questions from './questions.json';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    @ViewChild('_quizComponent', {static: false}) quizComponent!: NgxQuizComponent;

    user_name: string|any = '';

    quiz: Quiz | any;

    setUserName : boolean = false;

    ngOnInit(): void {
        this.quiz = {
            name: 'Питання генерував Chat GPT я не винен',
            level: 'Часу',
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
                title: 'Ай молодець',
                description: 'Завершено',
                displayImage:
                    'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/04/ai-generated-gba2dce9e3_1920_xMPNobD.jpg',
                buttonText: 'Знову'
            },
            questions: questions
        };

        this.user_name = localStorage.getItem('user')?? '';
    }

    next($event: any) {
    }

    finished($event: any) {
        console.log($event)

        const maxCoutn = this.quiz.questions.length;

        const reportCount = Object.keys($event).reduce(function (acc, key) {
            acc += $event[key].value;
            return acc
        }, 0 );

        const percent = reportCount / maxCoutn * 100;
        console.log('maxCoutn', maxCoutn);
        console.log('reportCount',reportCount);
        console.log('percent',percent);


        if (percent <= 50){
            this.quiz.endScreen.title = 'Зовсім біда '+ this.user_name;
            this.quiz.endScreen.displayImage = 'assets/image/min_60.webp';
        }


        if (percent > 75){
            this.quiz.endScreen.title = 'Спробуй ще раз, можливо буде більше '+ this.user_name;
            this.quiz.endScreen.displayImage = 'assets/image/sticker_n.webp';
        }

        if (percent > 85){
            this.quiz.endScreen.title = 'Спробуй ще раз, можливо буде більше '+ this.user_name;
            this.quiz.endScreen.displayImage = 'assets/image/75.webp';
        }

        if (percent >= 90){
            this.quiz.endScreen.title = 'Молодець але можна і краще '+ this.user_name;
            this.quiz.endScreen.displayImage = 'assets/image/sticker.webp';
        }

        if (percent >= 95){
            this.quiz.endScreen.title = 'Ай молодець '+ this.user_name;
            this.quiz.endScreen.displayImage = 'https://img.20minut.ua/uploads/comment/0022/78/8e8f4137204afbfe810caef8ece8d5047b8c5f85.jpeg';
        }

        this.sendStat();


    }

    nextToQuiz() {
        this.setUserName = true;
        localStorage.setItem('user',this.user_name);
    }

    private sendStat() {

    }
}
