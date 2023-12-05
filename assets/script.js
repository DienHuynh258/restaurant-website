
    var header = document.getElementById("header");
    var mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.onclick = function() {
         var isClose = header.clientHeight === 80;
         if(isClose){
            header.style.height = 'auto';
         } else{
            header.style.height = '80px';
         }

    }


    


    //login 

    var modal = document.getElementById('login-form');
    var modalSignUp = document.getElementById('sign-up-form');
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal || event.target == modalSignUp) {
            modal.style.display = "none";
            modalSignUp.style.display="none";
        }
    }

    var signUpLink = document.getElementById('sign-up-link');
    signUpLink.onclick = function(){
        modal.style.display = 'none';
        modalSignUp.style.display = 'flex';
    }

    var loginFormLink = document.getElementById('login-form-link');
    loginFormLink.onclick = function(){
        modal.style.display = 'flex';
        modalSignUp.style.display = 'none';
    }
//end login

var iconLogin = document.getElementById("icon-login");
    iconLogin.onclick = function(){
        if(header.style.height == 'auto'){
            header.style.height = '80px';
            modal.style.display = 'flex';
            
        }
        else{
            modal.style.display = 'flex';
        }
    }

