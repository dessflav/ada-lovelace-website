const username = document.getElementById("username")
const phone = document.getElementById("phone")
const email = document.getElementById("email")

function validateForm(){
  if( username != "" && phone.value != "" && email.value != ""){
  alert("You will receive the news by email.")
  }else{
    alert("Please, fill in all fields!")
  }  
}

document.getElementById("submitButton").addEventListener("click", validateForm)
//extra exercise commented
//document.getElementById("name").value != "" && document.getElementById("email").value != "" && document.getElementById("phone").value != ""