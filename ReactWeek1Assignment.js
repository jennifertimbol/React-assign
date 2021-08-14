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
    // if (students === undefined) {
    //     students = [];
    // }
    registerStudent(student) {
        let newStudent = students.email.filter(student => student.email === 0); {
            students.push(newStudent);
        }
        console.log(`Registering ${Student.email} to the bootcamp Web Dev Fundamentals.`);
        return students;
    }
}