let parah3 = document.getElementById(`parah3`);
let parah2 = document.querySelector(`.parah2`);
let heading = document.querySelector(`.mainContent`);

function Onclicks() {
    parah3.innerHTML = `To download any sample video from any Free Tutorial.`
    parah2.innerHTML = `<p>DON'T HAVE AN ACCOUNT?&nbsp;<a id="SignUpModal" class="SignUpModal" onclick="SignUp()" >SIGN UP</a></p>`;
}

function SignUp() {
    console.log(`hi`)
    parah3.innerHTML = `<p>To download sample videos & more!<p>`;
    parah2.innerHTML = `<p>ALREADY HAVE AN ACCOUNT?<a id="LogInModal " class="LogInModal " onclick=' Onclicks() '> LOG IN</a></p>`;
}