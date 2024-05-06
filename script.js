function validatePassword(event) {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");
    if (password.length < 8) {
      message.innerText = "Heslo musí obsahovat alespoň 8 znaků.";
      return;
    }
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
      message.innerText = "Heslo musí obsahovat alespoň jedno velké písmeno, jedno malé písmeno a jedno číslo.";
      return;
    }
    if (password !== confirmPassword) {
      message.innerText = "Hesla se neshodují.";
      return;
    }
    message.innerText = "Heslo je platné.";
   }
   