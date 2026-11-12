ভূমিকা :
object oriented programming (oop)এর মুল ভিত্তি হলো এনক্যাপসুলেশান।যার মাধ্যমে ক্লাস ভেতরের ডাটা এবং মেথড গুলোকে নিয়ন্ত্রণ করা হয়।আর টাইপস্কিপ্ট এর একসেস মডিফাই করার জন্য রয়েছে, পাবলিক,প্রাইভেট, প্রটেকশন, বিশেষ মডিফায়ার রিডেন্ডলি।

মুলভাব:
টাইফস্কৃপ্টে তিনটি একসেস মডিফায়ার রয়েছে, এবং একটি বিশেষ মডিফাইয়ার আছে।
১.পাবলিক,
২.প্রাইভেট,
৩.প্রোটেকশন,
৪.রিডোনলি
পাবলিক নিয়ে আলোচনা
পাবলিক হলো ক্লাসের ভিতর এবং বাহির থেকে একসেস করা যায়।এবং পাবলিক কিওয়ার্ড না দিলে ও তা পাবলিকই থাকে।
উদাহরণ
class animal {
Public name:string;

Construction (name:string)
{
This.name=name;
}
Public catSound():void{
Console.log(`&{this.name} is making a Sound. `);
}
}

Const dog =new animal ("Tommi");
Console.log(dog.name)
প্রাইভেট নিয়ে আলোচনা
প্রাইভেট হলো ঐনির্দিষ্ট ক্লাসের প্রপার্টি এবং মেথডের ভিতরে একসেস করা যাবে এবং এর বাহিরে থেকে কেউ দেখতে এবং একসেস করতে পারবে না।

উদাহরণ
class BankAccount{
private balance =number ;
Construction (balance =number) {
This.balance =balance ;
}
Public getbalance():number {
return this.balance?;
}

}
Const Account =new BankAccount(5000);
Console. Log(Account. Balance)//error
Console.log(Account. getBalance());// Right

প্রোটেকশন নিয়ে আলোচনা
প্রোটেকশন হলো তার নিজ ক্লাস এবং চাইল্ড ক্লাসে একসেস করা যাবে এবং এর বাহিরে থেকে কেউ দেখতে এবং একসেস করতে পারবে না।

উদাহরণ

Class person{
Protection age:number ;

Construction (age:number)
{
This.age=age ;
}
}
Class Employee extends person{
Public: getEmployee();number {
return this.age;
}
}
Const Emp=new Employee(25);
Console.log(emp.getEmployee());//right
Console.log(Emp.age)// erroerror

Readonly হলো এটি যে প্রপার্টিতে ব্যবহার করা হয়, তা তার ভেলু একবার সেট করলে আর পরিবর্তন করা যায়না।

উদাহরণ

Class User{
readonly id:number;
Public name:string ;
Construction ( id:number,name:string){
This.id=id,
This.name=name,
}
}
Const user1=new User(101,"Rasel");
user1.id=201, //error

উপসংহার
পরিশেষে বলা যায়, টাইপস্কৃপ্ট এ সটিক একসেস মডিফায়ার ব্যবহার করে কোর্ড আরো ও বেশি সুরক্ষিত, পরিচ্ছন্ন করা যায়।
