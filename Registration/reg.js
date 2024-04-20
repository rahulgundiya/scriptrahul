var id= Math.floor(new Date().valueOf() * Math.random());
function saveData()
{
let userid,fullname,address,email,city,password,state,mobile,pincode;
userid=id;    
fullname=document.getElementById("fullname").value;
address=document.getElementById("address").value;
email=document.getElementById("email").value;
city=document.getElementById("city").value;
password=document.getElementById("password").value;
state=document.getElementById("state").value;
mobile=document.getElementById("mobile").value;
pincode=document.getElementById("pincode").value;

switch(fullname)
{
    case "" :
        alert("Please Enter Your Name..");
        break;
        fullname.focus();
}

//     case address=="":
//         alert("Please Enter Your Address");
//         break;
//         case email=="":
//         alert("Please Enter Your email..");
//         break;
//     case password=="":
//         alert("Please Enter Your Password");
//         break;
//         case state=="":
//         alert("Please Enter Your state..");
//         break;
//     case mobile=="":
//         alert("Please Enter Your City");
//         break;
//    case pincode=="":
//             alert("Please Enter Your PinCode...");
//             break;


// if( fullname == "" ) {
// alert("Please provide your name!");
// return false;
// }
// if(city == "" ) {
// alert("Please provide your city!" );
//      return false;

//   }
//   if(state == "" ) {
//      alert("Please provide your state!" );
//      return false;
//   }
//   if(address == "" ) {
//      alert("Please provide your Address!" );
//      return false;
//   }
//   if(mobile=="") {
//      alert("Please provide your Mobile!");
//      mobile.focus();
//    return false;
//   }
  
//   var expr = /^(0|91)?[6-9][0-9]{9}$/;
//     if (!expr.test(mobile)) {
//       alert("Invalid Mobile Number");
//       return false;
//     }
      
//   if(pincode=="") {
//      alert("Please provide your pincode!");
//      return false;
//     }
//   if(password=="") {
//      alert("Please provide your password!");
//      return false;
//       }
     
//    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//   if(reg.test(email)==false ){
//     alert("Invalid Email Id")
//     return false;
//   }

//   if(email=="") {
//      alert("Please provide your email!");
//   return false;
//    } 
//    else if(!email.includes("gmail")) {
//      alert("Invalid email!");
//   return false;
//    } 
//    else if(!email.includes(".com")) {
//      alert("Email Need .Com !");
//   return false;
//    } 
localStorage.setItem("userid",userid);
localStorage.setItem("fullname",fullname);
localStorage.setItem("address",address);
localStorage.setItem("email",email);
localStorage.setItem("city",city);
localStorage.setItem("password",password);
localStorage.setItem("stats",state);
localStorage.setItem("mobile",mobile);
localStorage.setItem("pincode",pincode);
let user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{
    return v.email==email && v.password==password 
}))
{
alert("Duplicate Data");
}
else{
    user_records.push({
    "userid":userid,
    "fullname":fullname,
    "address":address,
    "email":email,
    "city":city,
    "password":password,
    "stats":state,
    "mobile":mobile,
     "pincode":pincode
   })
    localStorage.setItem("users",JSON.stringify(user_records));
    window.location.replace("../Login/login.html");
    }
    }