document.addEventListener("DOMContentLoaded",()=>{
  console.log("loaded")
  document.getElementById("username").addEventListener("input",()=>{
      let username=document.getElementById("username").value;
      let email=document.getElementById("email").value;
      let valami = validateEmail(email);
      if (valami=true) {
          console.log("a")
      }else{
          console.log("b")
      }
      if (username) {
          
      }
  })

function validEmail(Email){
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(Email)
}
});