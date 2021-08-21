class Student{
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp{
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        let allStudents = this.students.filter(student => student.email === studentToRegister.email);
        if(allStudents.length === 0) {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`);
            return this.students;
        }
        else {
            console.log(`The student ${studentToRegister.email} is already registered.`)
        }
    }
}

class Bootcamp{
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {
        if(this.students.filter(s => s.email === student.email).length) {
            console.log(`The student ${student.email} is already registered.`)
        }
        else {
            this.students.push(student);
            console.log(`Registering ${student.email} to the Bootcamp ${this.name}.`)
        }
        return students;
    }
}
