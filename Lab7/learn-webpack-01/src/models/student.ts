export class Student {
    fullName: string;
    firstName: string;
    middleInitial: string;
    lastName: string;
    constructor(firstName: string, middleInitial: string, lastName: string){
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this. lastName = lastName;
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
}