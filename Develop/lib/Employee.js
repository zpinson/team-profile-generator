// TODO: Write code to define and export the Employee class

class Employee {
    constructor (id, name, email){
        this.id = id;
        this.name =  name;
        this.email = email;
    }

    getId() {
        return this.id
    } 
    getName() {
        return this.name
    }
    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }

    // add getter for id
}


// const sasha = new Employee('123', 'Sasha', 'shumonov@SpeechGrammarList.com')

// sasha.getName() // "Sasha"
// sasha.getRole() // "Employee"

module.exports = Employee
