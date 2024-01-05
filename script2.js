// iterate overall for loops(for, for in, for each, for of)

let empdet = [{
    "name" : "Keerthana Ravi",
    "designation" : "Developer",
    "email" : "xyz@ijk.com",
    "mobile" : "1234456",
    "Address" : "India",
    "Education" : "MCA"
},
{
    "experience" : "2 Years",
    "Companyname" : "xyz tech solution"
},
{
    "education" : "MCA",
    "institute" : "Madras university",
    "percentage" : "67%"
},
{
    "skills" : "fullstack developer",
    "languages" : "English",
    "Achievements" : "Certified Hairstylist and beautician"
}
];

// For

for(let i = 0; i<empdet.length; i++){
    console.log("For loop Answer is : ", empdet[i]);
}

// For each

empdet.forEach(element => {
    console.log("For Each Answer is : ",element.experience);
});

// // For in

for (const a in empdet) {
    if (empdet.hasOwnProperty.call(empdet, a)) {
        const element = empdet[a];
        console.log("For IN Answer is : ",element.education);
        
    }
}

// // For of
for (const num of empdet) {
    console.log("For Of Answer is : ",num.Achievements);
}