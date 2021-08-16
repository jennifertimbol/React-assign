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
        console.log("all students for add",allStudents)
        if(allStudents.length === 0) {
            this.students.push(studentToRegister);
        }
        console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`);
        return this.students;
    }
}