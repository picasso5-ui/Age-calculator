      function myFunction() {
   //stores the input by the user
    const userInput = document.getElementById("inputIt").value;
           if (!userInput ) {
               alert("the field is required");
               return false
         } else if (isNaN(userInput)) {
            alert('enter a number')
            return false;
         }
         
         
         
         else{

            const date = new Date();
            //to get the year only
            const year = date.getUTCFullYear();
               
            
             document.getElementById("demo").innerHTML = " you are " + (year-userInput)+"years old!!";
        }
         }
    
   
          //to get the date first
    
//the reset button function
function restart() {
      document.getElementById("demo").remove();


      //for refreshing
      setTimeout("location.reload(true);" ,50);
}

     




















