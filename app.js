
      // ------ creating the caculator function ---- //
      function sumBtn() {
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
        var operator = document.getElementById("operator").value;

        var sum;
        if (operator == "+") {
          result = parseInt(num1) + parseInt(num2);
        } else if (operator == "-") {
          result = parseInt(num1) - parseInt(num2);
        } else if (operator == "*") {
          result = parseInt(num1) * parseInt(num2);
        } else if (operator == "/") {
          result = parseInt(num1) / parseInt(num2);
        } else if (operator == "%") {
          result = parseInt(num1) % parseInt(num2);
        }

        document.getElementById("sum").innerHTML = "Result: " + result;
      }
      // ------ end of the caculator function ---- //

      // ---- create the login function --- //

      // adding value to default username and password
      const defaultUsername = "admin";
      const defaultPassword = "123";

      // Get login form and add submit event listener
      const loginForm = document.getElementById("login-form");
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get username and password values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if username and password are correct
        if (username === defaultUsername && password === defaultPassword) {
           swal({
           title: "Welcome!",
           text: `Hello ${username} We glad to see you here!`,
           icon: "success",
         });
         document.getElementById("attempt").innerHTML = `Hello ${username} you have logged in successfully`;
        } else {
          swal({
            title: "Somthing get wrong!",
            text: `Username or Password incorrect`,
            icon: "error",
          });
          loginForm.reset();
          loginForm.username.focus();
          decrementAttempts();
        }
      });

      // Define number of login attempts
      let attempts = 3;

      // Decrement attempts and hide login form if no attempts left
      function decrementAttempts() {
        attempts--;
        if (attempts === 0) {
          loginForm.style.display = "none";
        }
        document.getElementById("attempt").innerHTML = "attempts remaining " + attempts;
      }

      // ----- creating the function to check if this bar baz or foo ----- //

      function bazBtn (){
      var number = document.getElementById("foonum").value;
     
       if (number%2 === 0 && number%3 === 0) {
      document.getElementById("result").innerHTML = "Baz " + number;
     } else if (number%2 === 0) {
      document.getElementById("result").innerHTML = "Bar " + number;
     } else if (number%3 === 0) 
     document.getElementById("result").innerHTML = "Foo " + number;
        else {
          document.getElementById("result").innerHTML = "Not Divide By Any of the Number (2,3 or 2&3) " + number;
        }
     }


        // ---- asking the user for his name --- //
      // fullName = prompt(
      //   "Hello Guest :) \nWe Would like to know you \nPlease enter your Full Name(first&last)"
      // );

      // --- give the button on click fun to show alert with the user full name --- //
      // function loginBtn() {
      //   swal({
      //     title: "Welcome!",
      //     text: `Hello ${fullName} We glad to see you here!`,
      //     icon: "success",
      //   });
      // }
      // --- end of function the the button alert login --- //
