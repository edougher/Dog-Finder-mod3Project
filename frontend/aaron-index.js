let user = {
  id: null,
  name: null,
  isActive: false
}

//homepage
body = document.querySelector('body')
startHome = () =>{
navBar()
header()
signInSignup()
homePageSlideShow()
getDogsForSlideShow()

}

//animal-card page
startCardsIndex = () => {
navBar()
createCardContainer()
generateDog()

}

//homepage below
navBar = () => {
    const navBar = `
    <div class="w3-top">
    <div id="nav-section" class="w3-bar w3-section w3-white w3-wide w3-padding">
      <a href="#home" class="w3-bar-item w3-button"><b>DOG</b>Finder</a>
      <!-- Float links to the right. Hide them on small screens -->
      <div class="w3-right w3-hide-small">
        <a onclick="startHome()" class="w3-bar-item w3-button">Home</a>
        <a  onclick="startCardsIndex()" id="card-page" class="w3-bar-item w3-button">Animals</a>
        <a onclick="startProfilePage()" class="w3-bar-item w3-button">Profile</a>
        <a id="conjure-dog-btn" class="w3-bar-item w3-button">Conjure Dog</a>
      </div>
    </div>
  </div>
  <main>
  </main>
    `
    body.innerHTML = navBar
    console.log(1)
    
}

header = () => {
    const header = `
    <header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
        <img class="w3-image w3-card-4 w3-sepia-max" src="/Users/aaron/Flatiron/javascript/mod-3-proj/frontend/resources/images/juan-manuel-nunez-lvpV017SZao-unsplash.jpg" alt="" width="1500" height="800">
      <div class="w3-display-middle w3-margin-top w3-center">
        <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>DOG</b></span> <span class="w3-hide-small w3-text-light-grey">Finder</span></h1>
      </div>
  </header>
    `
    body.innerHTML += header
    console.log(2)
    
}

signInSignup = () => {
  const signUpBtn = `
  <div class="w3-content w3-padding" style="max-width:1564px">
   <div class="w3-container w3-padding-32" id="signUp">
   <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16 w3-center">Sign Up</h3>
  </div>
  </div>
  <div class="w3-container">
  <div class="w3-card-4 w3-center">
  <button onclick="displaySignIn()"id="sign-in-btn" class="w3-button w3-round-xlarge">Sign In</button>
  <button onclick="displaySignUp()"id="sign-up-btn" class="w3-button w3-round-xlarge">Sign Up</button> 
  </div
</div>`
  
  body.innerHTML += signUpBtn
  //const signUpBTN = document.querySelector('#sign-up-btn')
  //signUpBTN.addEventListener('click', function(e) {
  //  displaySignUp()
  //})
  //const signInBTN = document.querySelector("#sign-in-btn")
  //signInBTN.addEventListener('click', function() {
  //  displaySignIn()
  //})
  //handleSignIn()
}


homePageSlideShow = () => {
const cardDiv = `
<div class="w3-content w3-padding" style="max-width:1564px">
 <div class="w3-container w3-padding-32" id="dogs">
  <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16 w3-center">Dogs Pics</h3>
 </div>
<div id="carousel" class="w3-content w3-section" style="max-width:500px">
<div id="img-cont" class="w3-card-4">
</div>
</div>
`
body.innerHTML += cardDiv

console.log(3)
}

getDogsForSlideShow = () =>{
    
    //displaySignIn()
    let i = 0
    do {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then(dogData => {
        createImg(dogData.message) 
        
    })
    i++
    }
    while(i < 10)
    
    console.log(4) 
}
createImg = (dogImg) => {
    //console.log(dogImg)
    const carousel = document.querySelector('#img-cont')

    //const card = `<div class="w3-card-4">
    //                <img class="image"src="img_avatar.png" alt="Person">
    //              </div>`
    let img = `<img class="w3-round" src="${dogImg}" style="width:100%; height: 60%">`
    carousel.innerHTML += img
    

    var slideIndex = 0;
carouselFunc();

function carouselFunc() {
    var i;
    var x = document.getElementsByClassName("w3-round");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carouselFunc, 2500); // Change image every 2.5 seconds
}

}

displaySignUp = () => {
  body.innerHTML = ''
  const signUpForm = `
  <div class="container">
  <form id="sign-up" class="was-validated">
    <div class="form-group">
      <label for="uname">Username:</label>
      <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember" required> I agree for my data to be tracked and stored.
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Check this checkbox to continue.</div>
      </label>
    </div>
    <button id="sign-up-btn" type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
  `
  body.innerHTML = signUpForm
  handleSignUp()
}
handleSignUp = () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    //let image = e.target[1].files[0]
    let userName = e.target[0].value
    

    createUser(userName)
   
  }) 
}
createUser = (userName) => {
  //const formData = new FormData()
  //const fileField = document.querySelector('input[type="file"]')
  //formData.append('name', userName)
  const newName = {
    name: userName
  }
  const reqObj = {
    method: "POST",
    header: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newName)
  }
  fetch('http://localhost:3000/users', reqObj)
  .then(resp => resp.json())
  .then(userData => {
    user = userData
    startCardsIndex()
  })
}

startProfilePage = () => {
  navBar()
  header()
  const userCard = `
  <div class="w3-card-4">
  <header class="w3-container w3-blue">
    <h1>Header</h1>
  </header>
  
  <div class="w3-container">
    <p>Lorem ipsum...</p>
  </div>
  
  <footer class="w3-container w3-blue">
    <h5>Footer</h5>
  </footer>
  
  </div>
  
  <input type='file' name='image'/>
  `
  body.innerHTML = userCard

}


displaySignIn = () => {
  const body = document.querySelector('body')
  body.innerHTML = ''
  const signUpModal = `
  <div id="signUp" class="w3-modal">
    <div class="w3-modal-content">
      <div class="w3-container">
        <span onclick=""
        class="w3-button w3-display-topright">&times;</span>
        <div class="container">
        <form id="sign-in">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="username" class="form-control" placeholder="Enter username" id="username">
        </div>
        <button id="sign-in-btn"type="submit" class="btn btn-primary">Submit</button>
        <button type="click" class="btn btn-primary" onclick="handleModalCancelClick()">Cancel</button>
      </form>
</div>
      </div>
    </div>
  </div>`
  body.innerHTML += signUpModal
  showSignInModal()
  }

  showSignInModal = () => {
    const modal = document.querySelector('#signUp')
    modal.style.display='block'
    handleSignIn()
  }

  handleSignIn = () => {
    const signInSubmit = document.querySelector('form#sign-in') 
    signInSubmit.addEventListener('submit', function(e) {
      e.preventDefault()
      const username = e.target[0].value
      checkUsername(username)
    }) 
  }

  checkUsername = (name) => {
    let username = name
   
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(userData => {
      if(userData.some(u => u.name === username)){
        let currentUser = userData.find(user => user.name === username)
        user = currentUser
        swal("Welcome Back", "success")
        startCardsIndex()
        
        //alert(`Welcome Back, ${username}!`)
      }
      else {
        displaySignUp()
      }
      //console.log(userData)
      //console.log(username)
      //user = userData
    })

  }


  handleModalCancelClick = () => {
    startHome()
  }
//homepage above
//startHome()

//card deck page below



createCardContainer = () => {
    const main = document.querySelector('main')
    const dogForm = `
    <div class="w3-card-4">
    
    
    </div
    <div class="w3-card-4">

    <header class="w3-container">
      <h1></h1>
    </header>
    <br>
    <br>
    <div id="dog-form-container" class="w3-container">
      
    </div>
    
    <footer class="w3-container w3-blue w3-center">
      <h5>Footer</h5>
    </footer>
    
    </div>`
    main.innerHTML += dogForm
    const dogDiv = document.querySelector('#dog-form-container')
    const cardContainer = `
    <div class="py-5">
     <div class="container">
      <div class="row hidden-md-up">
      </div>
     </div>
    </div
    `
    dogDiv.innerHTML += cardContainer
    //const container = document.querySelector('div.row.hidden-md-up')
  console.log(7)
}


createCard = (dog) => {
    const cardContainer = document.querySelector('div.row.hidden-md-up')
    const card = `
    <div class="col-md-4">
     <div class="card" >
      <div class="card-block" data-dog="${dog.id}">
       <img class="card-img-top w3-hover-opacity" src="${dog.image}" alt="Card image cap">
        <div class="card-body w3-card-4">
         <p class="card-text">${dog.name} - ${dog.breed}</p>
         <button class="like-btn"><3</button>
         <button class="adopt-btn">Take me home!</button>
        </div>
      </div>
     </div>
    </div>
    `
    cardContainer.innerHTML += card 
    console.log(9)

}

generateDog = () => {
    fetch('http://localhost:3000/animals')
        .then(resp => resp.json())
        .then(dogs => {
            dogs.forEach(dog => {
               createCard(dog)
                 
            });
           jakeMain() 
        })
        console.log(8)
}

//startCardsIndex()









//<!-- About Section -->
//</div><div class="w3-container w3-padding-32" id="about">
//</div>  <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
//</div>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
//</div>    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//</div>    laboris nisi ut aliquip ex ea commodo consequat.
//</div>  </p>
//</div></div>

//<div class="w3-row-padding w3-grayscale">
//  <div class="w3-col l3 m6 w3-margin-bottom">
//    <img src="/w3images/team2.jpg" alt="John" style="width:100%">
//    <h3>John Doe</h3>
//    <p class="w3-opacity">CEO & Founder</p>
//    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
//    <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
//</div>
//<!-- Image of location/map -->
//<div class="w3-container">
//<img src="/w3images/map.jpg" class="w3-image" style="width:100%">
//</div>










//references

// <img src="https://images.dog.ceo/breeds/cattledog-australian/IMG_5481.jpg"></img>



// ex for center constainer
// <section class="jumbotron text-center">
//             <div class="container">
//               <h1 class="jumbotron-heading">Project Example</h1>
//               <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
//               <p>
//                 <a href="#" class="btn btn-primary my-2">Main call to action</a>
//                 <a href="#" class="btn btn-secondary my-2">Secondary action</a>
//               </p>
//             </div>
// </section>