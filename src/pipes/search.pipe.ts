import { Pipe, PipeTransform } from "@angular/core";
import { IUser } from "../interfaces/user.interface";

@Pipe({
    name: 'filter',
})
export class SearchPipe implements PipeTransform {

    public transform(users: IUser[], value: string): IUser[] {
        return users.filter((item: IUser) => item.name.toLowerCase().includes(value.toLowerCase()));
    }

}