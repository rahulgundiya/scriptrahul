function getValue() {
    var parseId = localStorage.getItem("userid");
    document.getElementById("currentId").value = parseId;
    var parseEmail = localStorage.getItem("email");
    document.getElementById("email").value = parseEmail;
    var parsePassword = localStorage.getItem("password");
    document.getElementById("password").value = parsePassword;
    var parseName = localStorage.getItem("fullname");
    document.getElementById("fullname").value = parseName;
    var parseAddress = localStorage.getItem("address");
    document.getElementById("address").value = parseAddress;
    var parseCity = localStorage.getItem("city");
    document.getElementById("city").value = parseCity;
    var parseMobile = localStorage.getItem("mobile");
    document.getElementById("mobile").value = parseMobile;
    var parsePin = localStorage.getItem("pincode");
    document.getElementById("pincode").value = parsePin;
    var parseState = localStorage.getItem("stats");
    document.getElementById("stats").value = parseState;
  }
  getValue();

  function editData() {
    document.getElementById("fullname").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("password").disabled = false;
    document.getElementById("mobile").disabled = false;
    fullname.focus();
    var button = (document.getElementById("edit").style.display = "none");
    var save = (document.getElementById("save").style.display = "block");
    var save = (document.getElementById("cancel").style.display = "block");
  }

  function saveUserToStorage() {
   
    var parseId = document.getElementById("currentId").value;
    var parseEmail = document.getElementById("email").value;
    var parseName = document.getElementById("fullname").value;
    var parseAddress = document.getElementById("address").value;
    var parsePassword = document.getElementById("password").value;
    var parseCity = document.getElementById("city").value;
    var parseMobile = document.getElementById("mobile").value;
    var parsePin = document.getElementById("pincode").value;
    var parseState = document.getElementById("stats").value;
    localStorage.setItem("stats", parseState);

    var user = {
      userid: parseId,
      fullname: parseName,
      address: parseAddress,
      email: parseEmail,
      city: parseCity,
      password: parsePassword,
      stats: parseState,
      mobile: parseMobile,
      pincode: parsePin,
    };
    var current_user = JSON.parse(localStorage.getItem("users")) || [];
    current_user.forEach((element, index) => {
      if (element.userid == parseId) {
        current_user[index] = user;
      }
    });

    localStorage.setItem("users", JSON.stringify(current_user));
    localStorage.setItem("fullname", parseName);
    localStorage.setItem("address", parseAddress);
    localStorage.setItem("email", parseEmail);
    localStorage.setItem("city", parseCity);
    localStorage.setItem("password", parsePassword);
    localStorage.setItem("stats", parseState);
    localStorage.setItem("mobile", parseMobile);
    localStorage.setItem("pincode", parsePin);
    window.location.replace("/Home/home.html");
  }
  
  function editData2() {
    document.getElementById("address").disabled = false;
    document.getElementById("city").disabled = false;
    document.getElementById("stats").disabled = false;
    document.getElementById("pincode").disabled = false;
    address.focus();
    document.getElementById("edit2").style.display = "none";
    document.getElementById("save2").style.display = "block";
    document.getElementById("cancel2").style.display = "block";
  }
  function cancelData() {
    window.location.replace("home.html");
  }
  function logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.replace("/Login/login.html");
  }