import { Component, Inject, Input } from '@angular/core';
import { IUser } from "../../interfaces/user.interface";
import { LessonService } from '../../services/lesson.service';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
})
export class UserListComponent {

    public colors: string[] = ['red', 'black', 'green', 'yellow', 'blue'];

    constructor(
        private lessonService: LessonService
    ) {
        this.lessonService.print('Hello!');
    }

    public valueFilter: string = '';

    public users: IUser[] = [
        {
            name: 'kek',
            surname: 'kekMem',
            age: 10
        },
        {
            name: 'Ира',
            surname: 'Пупкина',
            age: 17
        },
        {
            name: 'Наталья',
            surname: 'Фозина',
            age: 20
        },
        {
            name: 'Люба',
            surname: 'kekMem',
            age: 35
        },
        {
            name: 'Дарья',
            surname: 'Умничкина',
            age: 1
        },
        {
            name: 'Алина',
            surname: 'Малышкина',
            age: 40
        },
        {
            name: 'Арина',
            surname: 'Головкина',
            age: 13
        },
    ];
}