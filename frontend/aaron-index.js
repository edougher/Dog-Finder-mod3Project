
startHome = () =>{
navBar()
header()
homePageSlideShow()
getDogsForSlideShow()

}

startCardsIndex = () => {
navBar()
createCardContainer()
generateDog()
}
//homepage below
navBar = () => {
    const navBar = `
    <div class="w3-top">
    <div class="w3-bar w3-white w3-wide w3-padding w3-card">
      <a href="#home" class="w3-bar-item w3-button"><b>DOG</b>Finder</a>
      <!-- Float links to the right. Hide them on small screens -->
      <div class="w3-right w3-hide-small">
        <a href="#projects" class="w3-bar-item w3-button">Home</a>
        <a href="#about" class="w3-bar-item w3-button">Animals</a>
        <a href="#contact" class="w3-bar-item w3-button">IDK YET</a>
      </div>
    </div>
  </div>
  <main>
  </main>
    `
    const body = document.querySelector('body')
    body.innerHTML = navBar
    console.log(1)
    
}

header = () => {
    const header = `
    <header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
        <img class="w3-image" src="/Users/aaron/Flatiron/javascript/mod-3-proj/frontend/resources/images/juan-manuel-nunez-lvpV017SZao-unsplash.jpg" alt="" width="1500" height="800">
      <div class="w3-display-middle w3-margin-top w3-center">
        <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>DOG</b></span> <span class="w3-hide-small w3-text-light-grey">Finder</span></h1>
      </div>
  </header>
    `
    const body = document.querySelector('body')
    body.innerHTML += header
    console.log(2)
}


homePageSlideShow = () => {
const body = document.querySelector('body')
const cardDiv = `
<div class="w3-content w3-padding" style="max-width:1564px">
 <div class="w3-container w3-padding-32" id="projects">
  <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Dogs</h3>
 </div>
<div id="carousel" class="w3-content w3-section" style="max-width:500px">
</div>
`
body.innerHTML += cardDiv

console.log(3)
}

getDogsForSlideShow = () =>{
    
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
    const carousel = document.querySelector('div#carousel')
    let img = `<img class="mySlides" src="${dogImg}" style="width:100%">`
    carousel.innerHTML += img

    var slideIndex = 0;
carouselFunc();

function carouselFunc() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carouselFunc, 2500); // Change image every 2 seconds
}
}


//homepage above


//card deck page below
createCardContainer = () => {
    const main = document.querySelector('main')
    const cardContainer = `
    <div class="py-5">
     <div class="container">
      <div class="row hidden-md-up">
      </div>
     </div>
    </div
    `
    main.innerHTML = cardContainer
    const container = document.querySelector('div.row.hidden-md-up')

}


createCard = (dog) => {
    const cardContainer = document.querySelector('div.row.hidden-md-up')
    const card = `
    <div class="col-md-4">
     <div class="card" >
      <div class="card-block">
       <img class="card-img-top" src="${dog.image}" alt="Card image cap">
        <div class="card-body">
         <p class="card-text">${dog.name}</p>
        </div>
      </div>
     </div>
    </div>
    `
    cardContainer.innerHTML += card 
    
}

generateDog = () => {
    fetch('http://localhost:3000/animals')
        .then(resp => resp.json())
        .then(dogs => {
            dogs.forEach(dog => {
               createCard(dog)
                 
            });
            
        })
}










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