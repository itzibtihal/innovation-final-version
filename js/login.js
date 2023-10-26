
function validateForm() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
  
	if (username === "" || username === null) {
	  alert("Veuillez saisir un nom d'utilisateur.");
	  return false; 
	}
  
	if (password === "" || password === null) {
	  alert("Veuillez saisir un mot de passe.");
	  return false; 
	}
  
	
	return true;
  }



  const inputs = document.querySelectorAll(".input");

  function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
  }
  
  function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value === "") {
	  parent.classList.remove("focus");
	}
  }
  
  inputs.forEach((input) => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
  });
  


  