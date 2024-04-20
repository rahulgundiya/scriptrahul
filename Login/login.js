function loginData() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email)==false) {
      alert("Invalid Email Id");
      return false;
    }
    else if (email == "") {
      alert("Please Type email");
      email.focus();
      return false;
    }
    if (password == "") {
      alert("Please Type Password");
      password.value.focus();
      return false;
    }
    let login_records = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    if (
      login_records.some((v) => {
        return v.email == email && v.password == password;
      })
    ) {
      let current_login = login_records.filter((v) => {
        return v.email == email && v.password == password;
      })[0];
      localStorage.setItem("userid", current_login.userid);
      localStorage.setItem("email", current_login.email);
      localStorage.setItem("password", current_login.password);
      localStorage.setItem("fullname", current_login.fullname);
      localStorage.setItem("address", current_login.address);
      localStorage.setItem("city", current_login.city);
      localStorage.setItem("mobile", current_login.mobile);
      localStorage.setItem("stats", current_login.stats);
      localStorage.setItem("pincode", current_login.pincode);
      alert("Login Successfully");
      window.location.replace("/Home/home.html");
    } else {
      alert("login failed Check Email Password");
      window.location.replace("/Login/login.html");
    }
  }