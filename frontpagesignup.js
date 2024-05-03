window.location.href = "website.html"
// const user=document.getElementById("username");
// const pass=document.getElementById("password");
// const mail=document.getElementById("mail");

// const loginbtn=document.getElementById("btn");

// console.log(user,pass,loginbtn);

// loginbtn.addEventListener("click",(e)=>{
//     // console.log("form submitted")
//     e.preventDefault();
//     // console.log("Text entered -",user.value,pass.value);//jo input me diya wo return bhi krega
//     //     console.log("Form Sumbitted");
    
//     const nameentered=user.value.toLowerCase();
//     const passentered=pass.value.toLowerCase();
//     const mailentered=mail.value.toLowerCase();
//     // const present=mailentered.includes("Geeks");
//     // console.log(mailentered,nameentered,passentered);
//     // if(present)
//         // console.log('tr')
//     // console.log((mailentered.includes("@gmail.com",0) || mailentered.includes("@yahoo.com",0) || mailentered.includes("@hotmail.com",0) )&&(nameentered!="")&& (passentered!=""))
//     if ((mailentered.includes("@gmail.com",0) &&(nameentered!="")&& (passentered!=""))){
//         const indx=mailentered.indexOf("@");
//         console.log('inasas',indx-1,mailentered.slice(0,indx-1));
//         if (indx-1==-1) {
        
//             alert("Wrong mail");
//             user.value="";
//         pass.value="";
//         mail.value="";
//         }  
//         else 
//         {
//             window.location.href = "website.html"
//         } 
//     }
//     else
//     {
//         alert("Error invalid details. Please Try again ");
//         user.value="";
//         pass.value="";
//         mail.value="";
//     }
//     user.value="";
//     pass.value="";
//     mail.value="";
// })