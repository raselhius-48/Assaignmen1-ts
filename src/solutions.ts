 
const multiplyValue = (value: number, multiplier?: number): number => {
  const finalMultiplier = multiplier ?? 2;
  return value * finalMultiplier;
};

type Input = string | number | boolean;
type Output = string | number;

const processInput = (inputValue: Input): Output => {
  if (typeof inputValue === "string") {
    return inputValue.trim().toLowerCase();
  } else if (typeof inputValue === "number") {
    return inputValue * 10;
  } else if (typeof inputValue === "boolean") {
    return inputValue ? "Active" : "Inactive";
  }
 
};



type CoordinateTuple =readonly[number,number,string]

const formatCoordinate = (coord: CoordinateTuple): string => {
const [latitude, longitude, locationName] = coord;
return `Location: ${locationName} (${latitude}, ${longitude})`;
};


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
let result: T[] = [];
for (const arr of arrays) {
result = result.concat(arr);
}
return result;
};

interface Course {
title:string;
students:number;
isPublished:boolean;
}
const getPopularCourse = (courses: Course[], studentsNum: number): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= studentsNum
  );
};



class Employee{
protected name:string;
private baseSalary : number;

constructor (name:string, baseSalary:number){
this.name=name,
this.baseSalary=baseSalary,
}

 getDetailts ():string {
return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
}
}

class Manager extends Employee{
depertment:string;
constructor (name:string, baseSalary:number,depertment:string){
super(name=name,baseSalary)
this.depertment=depertment,
}
getRoleInfo (): string  {
return `manager of: ${this.department}:${this.name}`
};
}


const validateAgeAsync = (age: number): Promise<string> => {
return new Promise((resolve, reject) => {
if (age >= 18) {
setTimeout(() => {
resolve("Access Granted");
}, 1000);
} else {
reject(new Error("Access Denied: Must be 18 or older"));
}
});
};
 

