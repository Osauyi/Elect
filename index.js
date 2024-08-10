
let openImageIcon = document.querySelector(".openbutton")
let closeImageIcon = document.querySelector(".closebtn")



   function openNav() {
   document.getElementById("mySidepanel").style.height = "300px";
   closeImageIcon.style.display = "block"
   closeImageIcon.style.visibility = "visible"
   openImageIcon.style.display = "none"
   openImageIcon.style.visibility = "hidden"
   }

   function closeNav() {
   document.getElementById("mySidepanel").style.height = "0";
    closeImageIcon.style.display = "none"
   closeImageIcon.style.visibility = "hidden"
   openImageIcon.style.display = "block"
   openImageIcon.style.visibility = "visible"
   }

