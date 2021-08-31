export class Student{
    id: number;
    studentName: string;
    character: string;
    grade: string;
    constructor(id: number, name: string, character: string, grade: string) {
        this.id = id;
        this.studentName = name;
        this.character = character
        this.grade = grade;
    }
}