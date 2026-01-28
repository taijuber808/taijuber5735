class myData {
    Firstname;
    lastname;
    age;
    course;
    salary;
    pincode;
    
getmydata(Firstname,lastname,age,course,salary,pincode){
    this.Firstname = Firstname
    this.lastname=lastname
    this.age=age
    this.course=course
    this.salary=salary
    this.pincode=pincode
}
   
}

let detail = new myData();
detail.getmydata("Tai","Juber",20,"Full Stack Web",-333,382150)

console.table(detail);
