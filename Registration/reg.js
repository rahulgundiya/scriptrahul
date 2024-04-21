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

switch(true) {
    case fullname === "":
      alert("Please provide your name!");
      return false;
    case city === "":
      alert("Please provide your city!");
      return false;
    case state === "":
      alert("Please provide your state!");
      return false;
    case address === "":
      alert("Please provide your address!");
      return false;
    case mobile === "":
      alert("Please provide your mobile!");
      mobile.focus();
      return false;
    case !/^(0|91)?[6-9][0-9]{9}$/.test(mobile):
      alert("Invalid mobile number!");
      return false;
    case pincode === "":
      alert("Please provide your pincode!");
      return false;
    case password === "":
      alert("Please provide your password!");
      return false;
    case !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email):
      alert("Invalid email id!");
      return false;
    case email === "":
      alert("Please provide your email!");
      return false;
    case !email.includes("gmail"):
      alert("Invalid email!");
      return false;
    case !email.includes(".com"):
      alert("Email need .com!");
      return false;
    default:
      break;
  }

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