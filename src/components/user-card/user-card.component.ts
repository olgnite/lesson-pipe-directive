import { Component, Input } from '@angular/core';
import { IUser } from "../../interfaces/user.interface";

@Component({
    selector: 'user-card',
    templateUrl: './user-card.component.html',
})
export class UserCardComponent {

    @Input()
    public user?: IUser;
}