const courses = ["physics","applied physics","applied chemistry","chemistry","maths","mathematics","mathematics-1","mathematics-2","oops","C++","mechanics"];
console.log(courses);

var entered;
const search=document.querySelector("form input");
const searchbtn=document.querySelector("form button");
console.log(searchbtn);
searchbtn.addEventListener("click",(e)=>{
    // console.log("form submitted");
    let cnt=0;
    e.preventDefault();
    console.log("Text entered -",search.value);//jo input me diya wo return bhi krega
        console.log("Form Sumbitted");
    let c=1;
    entered=search.value.toLowerCase();
    // console.log(entered==='thapar university',typeof(entered),typeof(listofuniversitites[0].innerHTML));
    for (let index = 0; index < courses.length; index++) {
        console.log(courses[index].toLowerCase())
        if (courses[index].toLowerCase()===entered) {
            alert("Course is Present !!");
            c=0;
        }
        cnt++;
    }
    console.log(c);
    if (c==1) {
        alert("Course not present !!");
    }
    search.value="";
})

search.addEventListener("submit",(e)=>{
    // console.log("form submitted");
    e.preventDefault();
    let cnt=0;
    console.log("Text entered -",search.value);//jo input me diya wo return bhi krega
        console.log("Form Sumbitted");
    let c=1;
    entered=search.value.toLowerCase();
    // console.log(entered==='thapar university',typeof(entered),typeof(listofuniversitites[0].innerHTML));
    for (let index = 0; index < listofuniversitites.length; index++) {
        console.log(courses[index].toLowerCase())
        if (courses[index].toLowerCase()===entered) {
            alert("Course is Present !!");
            c=0;
        }
        cnt++;
    }
    console.log(c);
    if (c==1) {
        alert("Course not present !!");
    }
    search.value="";
})
