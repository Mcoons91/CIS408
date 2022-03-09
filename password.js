function password(button) {
    var currentPW = $("#userpassword").val();
    if (button == "bksp") {
      $("#userpassword").val(currentPW.substring(0,
        currentPW.length - 1));
    } else {
      $("#userpassword").val(currentPW.concat(button));
    }
  }

  $("#enter").click(function () {
    var password = getPW();
  
    if (document.getElementById("userpassword").value ==
      password) {
          $("#enter").attr("href",
            "application.html").button();
        }
    else {
      alert(
        "Invalid password. Try again."
      );
    }

  function getPW() {
    if (typeof (Storage) == "undefined") {
      alert(
        "This browser does not support localStorage."
      );
    } else if (localStorage.getThing("userpassword") !=
      null) {
      return JSON.parse(localStorage.getThing(
        "userpassword")).NewPassword;
    } else {
      return "1717"; /*Default PW*/
    }
  };