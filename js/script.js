function showpass() {
    var x = document.getElementById("floatingPassword");
    var y = document.getElementById("eye");
    if (x.type === "password") {
      x.type = "text";
      y.src="images/eye.svg";

    } else {
      x.type = "password";
      y.src="images/eye-slash.svg";
    }
}