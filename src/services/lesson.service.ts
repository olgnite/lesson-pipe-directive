import { Injectable } from '@angular/core';

@Injectable()
export class LessonService {

    public print(str: string): void {
        console.log(str);
    }
}