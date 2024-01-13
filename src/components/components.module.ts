import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchPipe } from "../pipes/search.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChangeColorDirective } from "../directives/change-color.directive";
import { RandomColorDirective } from '../directives/random-color.directive';
import { LessonService } from '../services/lesson.service';

@NgModule({
    declarations: [
        UserCardComponent,
        UserListComponent,
        SearchPipe,
        ChangeColorDirective,
        RandomColorDirective,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        LessonService
    ]
})
export class ComponentsModule {

}