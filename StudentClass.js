class Student{
    static count = 0
    constructor(name, age, phone, marks){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.marks = marks;
    Student.count = Student.count+1
    
    }

    eligibilty() {
        if(this.marks>40){
            console.log(`${this.name} is Eligibile`)
        }
        else{
            console.log(`${this.name} is Not Eligibile`)
        }
        
    }
    eligibleForPlacement(minmarks = 60){
         return (age = 20) =>{
            if(this.marks>minmarks && this.age>age){
                console.log(`${this.name} is eligible for placements`)
            }
            else{
                console.log(`${this.name} is not eligible for placements`)
                
            }
        };
    }


}


const piyush = new Student('Piyush', '22', '0022113344', '72')
const vishal = new Student('Vishal', '21', '002215544', '75')
const nikhil = new Student('Nikhil', '22', '8822113344', '65')
const rohit = new Student('Rohit', '22', '7722113344', '35')
const soumil = new Student('Soumil', '19', '9922113344', '38')

piyush.eligibilty();
vishal.eligibilty();
nikhil.eligibilty();
rohit.eligibilty();
soumil.eligibilty();

piyush.eligibleForPlacement()()
vishal.eligibleForPlacement()()
nikhil.eligibleForPlacement()()
rohit.eligibleForPlacement()()
soumil.eligibleForPlacement()()


console.log(Student.count);   // Will give totoal number of students


























