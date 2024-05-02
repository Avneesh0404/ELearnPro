const username="admin";
const password="123";

var nameentered;
const u=document.getElementById("adminonly");
// console.log(document.getElementById("adminonly"));
// console.log(u.length);
var passentered;
const user=document.getElementById("username");
const pass=document.getElementById("password");
const loginbtn=document.getElementById("btn");
console.log(user,pass,loginbtn);
loginbtn.addEventListener("click",(e)=>{
    console.log("form submitted")
    e.preventDefault();
    console.log("Text entered -",user.value,pass.value);//jo input me diya wo return bhi krega
        console.log("Form Sumbitted");
    
    nameentered=user.value.toLowerCase();
    passentered=pass.value.toLowerCase();
    console.log(nameentered==username.toLowerCase() && passentered==password.toLowerCase());
    if (nameentered==username.toLowerCase() && passentered==password.toLowerCase()) {
        
        // u.classList.remove("nav-link disabled");
        // u.classList.add("nav-link enabled");
        window.location.href = "website.html"
    }
    else
    {
        alert("Error invalid details. Please Try again ");
    }
    user.value="";
    pass.value="";
})

// search.addEventListener("submit",(e)=>{
//     // console.log("form submitted");
//     e.preventDefault();
//     let cnt=0;
//     console.log("Text entered -",search.value);//jo input me diya wo return bhi krega
//         console.log("Form Sumbitted");
        
//     entered=search.value.toLowerCase();
//     // console.log(entered==='thapar university',typeof(entered),typeof(listofuniversitites[0].innerHTML));
//     for (let index = 0; index < listofuniversitites.length; index++) {
//         console.log(courses[index].toLowerCase())
//         if (courses[index].toLowerCase()===entered) {
//             alert("Course is Present !!");
//         }
//         cnt++;
//     }
//     if (cnt==courses.length) {
//         alert("Course not present !!");
//     }
//     search.value="";
// })
