  // Get the modal-body

  let modalbdy = document.getElementById(`modalbody`);
  let modpara = document.getElementById(`modalpara`);

  // Get the button that opens the modal

  let modboddy =
      ` <div id="mainContent" class="mainContent">
        <h1 id="headh1" class="headh1">In Order to checkout, <br>you need to create an account!</h1>
        <br>
        <div class = "cont">
        <button class="btnhead">
        <span id="fb" class=" fa fa-facebook">
        </span>
        Register with facebook
        </button>
        <button class="btnhead">
        <span id="twit" class=" fa fa-twitter">
        </span>
        Register with Twitter
        </button>
        <button class="btnhead">
        <span id="google" class="fa fa-google">
        </span>
        Register with Google
        </button>
        </div>
        <br><br><br>

        <p id="parah1" class="parah1">ALREADY HAVE AN ACCOUNT?<a id="LogInModal" class="LogInModal" onclick='elem()'> LOG IN</a></p>
        </div>
    `;

  // When the user clicks the button, open the modal 

  function OnClicks() {

      //get your modal body by id and change its html

      modpara.innerHTML = `STEP 2 OF 3`;
      modalbdy.innerHTML = modboddy;

      //get your modal body content by id and change its css

      // changing css of h1
      let headingh1 = document.getElementById(`headh1`);

      headingh1.style.fontFamily = `Georgia`;
      headingh1.style.fontSize = `28px`;

      // changing css of para
      let para = document.getElementById(`parah1`);
      para.style.fontSize = `13px`;

      // changing css of buttons

      btn();
      MouseOver();
      MouseOut();
      LinKs();
  }

  let bttn1 = document.getElementsByClassName(`cont`);

  function btn() {
      Array.from(bttn1).forEach(function(element) {
          //   Creating variables to store content
          let bttn = element.getElementsByClassName(`btnhead`);
          let fb = document.querySelector(`#fb`)
          let twit = document.querySelector(`#twit`);
          let google = document.querySelector(`#google`);

          for (let i = 0; i < 3; i++) {
              bttn[i].style.border = `5px solid rgb(84, 82, 82)`;
              bttn[i].style.color = `black`;
              bttn[i].style.fontSize = `13px`;
              bttn[i].style.borderRadius = `50rem`;
              bttn[i].style.backgroundColor = `white`;

              // changing css of icons in buttons
              fb.style.color = `blue`;
              twit.style.color = `rgb(23, 114, 233)`;
              google.style.color = `red`;
          }
      })
  }

  function MouseOver() {
      Array.from(bttn1).forEach(function(element) {
          //   Creating variables to store content
          let bttn = element.getElementsByClassName(`btnhead`);
          let fb = document.querySelector(`#fb`)
          let twit = document.querySelector(`#twit`);
          let google = document.querySelector(`#google`);
          for (let i = 0; i < 3; i++) {
              // on mouse over changing css of content
              bttn[i].onmouseover = function() {
                  // changing css of buttons
                  bttn[i].style.border = `5px solid rgb(128, 124, 124)`
                  bttn[i].style.color = `rgb(117, 115, 115)`;
                  // changing css of icons in buttons
                  fb.style.color = `rgb(109, 129, 242)`;
                  twit.style.color = `rgb(81, 152, 245)`;
                  google.style.color = `rgb(245, 118, 130)`;
              };
          }
      })
  }

  function MouseOut() {
      Array.from(bttn1).forEach(function(element) {
          //   Creating variables to store content
          let bttn = element.getElementsByClassName(`btnhead`);
          for (let i = 0; i < 3; i++) {
              // on mouse over changing css of content
              bttn[i].onmouseout = function() {
                  btn();
              }
          }
      })
  }


  function LinKs() {
      Array.from(bttn1).forEach(function(element) {
          //   Creating variables to store content
          let bttn = element.getElementsByClassName(`btnhead`);

          for (let i = 0; i < 3; i++) {
              // adding link to buttons
              bttn[0].onclick = function() {
                  window.open(`https://www.facebook.com/`, `_blank`);
              }
              bttn[1].onclick = function() {
                  window.open(`https://twitter.com/explore`, `_blank`);
              }
              bttn[2].onclick = function() {
                  window.open(`https://www.google.com/gmail/`, `_blank`);
              }
          }
      })
  }

  // Changing content by clicking on Log In link

  function elem() {
      //   console.log(`hi`);
      let headh1 = document.querySelector(`.headh1`);
      let paraP1 = document.querySelector(`.parah1`);
      headh1.innerHTML = `Log in before proceeding to checkout.<br>`;
      let heading = document.querySelector(`.mainContent`);
      let parap2 = document.createElement(`p`);
      let tnode = document.createTextNode(`Sign in to watch your favorite tutorials.`);
      parap2.appendChild(tnode);
      heading.insertBefore(parap2, heading.childNodes[2]);
      parap2.style.fontSize = `23px`

      paraP1.innerHTML = `<p>DON'T HAVE AN ACCOUNT?&nbsp;<a id="SignUpModal" class="SignUpModal" onclick="SignUp()" >SIGN UP</a></p>`;
  };
  // Changing content by clicking on Sign Up link
  function SignUp() {
      console.log(`hi`);
      modalbdy.innerHTML = modboddy;
      OnClicks();
  }