
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


    window.addEventListener("scroll", function() {
      var st = window.scrollY;
      if (st > 100) {
        document.querySelector("header").style.display = "none";
      } 
      else {
        document.querySelector("header").style.display = "block";
      }
    });
    