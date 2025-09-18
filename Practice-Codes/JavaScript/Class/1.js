let DATA = "secret information";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data =",DATA);
    }
}
class Admin extends User {
    constructor(name,email){

    }
    editData() {
            DATA = "some new value"
    }
}
let student1 = new User("Raju","raju123@gmail.com");
let student2 = new User("Rahul","rahul345@email.com");

let admin1 = new Admin("admin","Admin122@gmail.com");