var mentors = [{
  firstName: "Antonio",
  lastName: "Miranda",
  skills: ["JS", "React", "Node"],
  class: "Mar1",
  studentLikes: 0,
  job: {
    company: "Google",
    position: "Senior developer",
    city: "Barcelona"
  }
},
{
  firstName: "Leo",
  lastName: "Messi",
  skills: ["Play football"],
  class: "Mar3",
  studentLikes: 0,
  job: {
    company: "FC Barcelona",
    position: "Player",
    city: "Barcelona"
  }
},
{
  firstName: "John",
  lastName: "VanDamme",
  skills: ["React", "Angular", "Python", "Node"],
  class: "Mar4",
  studentLikes: 0,
  job: {
    company: "Facebook",
    position: "Software Manager",
    city: "Chicago"
  }
},
{
  firstName: "Giorgio",
  lastName: "Polvara",
  skills: ["HTML", "JS", "React"],
  class: "Mar2",
  studentLikes: 0,
  job: {
    company: "Amazon",
    position: "Senior developer",
    city: "Barcelona"
  }
},

];

/*   1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React." */

for (let index = 0; index < mentors.length; index++) {
let each = mentors[index]
if (each.job.city === "Barcelona" && each.skills.includes("React")) {
  console.log(`Hi, my name is ${each.firstName} ${each.lastName}. I work in Barcelona and i know React.`);

}
}

/* 2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"] */

for (let index = 0; index < mentors.length; index++) {
let each = mentors[index]
if (each.job.city === "Barcelona") {
  each.skills.push("SQL")
  each.class = "Jun1"
  console.log(each.class, each.skills[each.skills.length - 1])
}
}

//3. Create an object method with the name .addSkill() to be able to ad skills from it


for (let index = 0; index < mentors.length; index++) {
mentors[index].addSkill = function (skill) {
  this.skills.push(skill)
}
}

for (let index = 0; index < mentors.length; index++) {
mentors[index].addSkill("CSS")
console.log(mentors[index].skills);

}

//4. Create a method to add a skill to all memebrs in a list of mentors

function addSkillAll(arr, newSkill) {
for (let index = 0; index < arr.length; index++) {
  let each = arr[index]
  each.skills.push(newSkill)
}
}

addSkillAll(mentors, "plumbing")
console.log(mentors);

//5. Create a method to remove a skill to all memebrs in a list of mentors (i did by object method)

for (let index = 0; index < mentors.length; index++) {

mentors[index].removeSk = function (skill) {
  let i = this.skills.indexOf(skill)
  if (i > -1) {
    this.skills.splice(i, 1)
  }
}

}

for (let index = 0; index < mentors.length; index++) {
mentors[index].removeSk("play")

}
console.log(mentors);

//6. Create a function that returns the name of the mentor with more number of skills

function maximus() {
let max = 0
let name = ""
for (let i = 0; i < mentors.length; i++) {
  let each = mentors[i]
  if (each.skills.length > max) {
    max = each.skills.length
    name = each         
  }

}
return name.firstName

}

console.log(maximus(mentors));

//7. Create the method .addStudentLikes() that increments by one the attribute studentLikes

for (let index = 0; index < mentors.length; index++) {
mentors[index].addStudentLikes = function (){
    this.studentLikes += 1;
}

}

for (let index = 0; index < mentors.length; index++) {

mentors[index].addStudentLikes()

}

console.log(mentors);

//8. Create a function that adds a student like to all mentors in the array

function addStudentLikesGlo(mentors){
   for (let index = 0; index < mentors.length; index++) {
     mentors[index].studentLikes += 1
     
   }
}

addStudentLikesGlo(mentors)
console.log(mentors);
