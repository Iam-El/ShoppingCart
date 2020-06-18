function navigation() {
  // var x = document.getElementById("mylinks");
  // if (document.getElementById("mylinks").classList[0] == "block") {
  //   document.getElementById("mylinks").style.display = "none";
  // } else {
  //   document.getElementById("mylinks").style.display = "block";
  // }

  if (document.getElementById("mylinks").classList[0] == "hide") {
    document.getElementById("mylinks").classList.remove("hide");
    document.getElementById("mylinks").classList.add("show")
  } else {
    document.getElementById("mylinks").classList.remove("show");
    document.getElementById("mylinks").classList.add("hide")
  }


}
