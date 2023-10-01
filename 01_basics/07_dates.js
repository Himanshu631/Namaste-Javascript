//Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023,0,26);
//console.log(myCreatedDate.toDateString());

myCreatedDate = new Date("2023-01-26");
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);

let newDate = new Date();
//console.log(newDate);

newDate.toLocaleString('default',{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
});