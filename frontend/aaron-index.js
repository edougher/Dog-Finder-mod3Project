
fire = () =>{
generateHeader()
createCardContainer()
generateRandomDog()
}
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
}


createCard = (dog) => {
    const cardContainer = document.querySelector('div.row.hidden-md-up')
    const card = `
    <div class="col-md-4">
    <div class="card" >
    <div class="card-block">
    <img class="card-img-top" src="${dog.message}" alt="Card image cap">
    <div class="card-body">
    <p class="card-text">Where info can go.</p>
    </div>
    </div>
    </div>
    </div>
    `
    cardContainer.innerHTML += card 
    
}

generateRandomDog = () => {
    let randomDogs = []
    for (let i = 0; i < 10; i++){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(dog => {
            createCard(dog)
            
        })
    }
    
}

generateHeader = () => {
    const header = `
    <header>
    <div class="bg-dark collapse show" id="navbarHeader" style="">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">What is this</h4>
                <p class="text-muted">Blah Blah Blah Blah.</p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-white">Contact</h4>
                <ul class="list-unstyled">
                  <li><a href="#" class="text-white">Follow on Twitter</a></li>
                  <li><a href="#" class="text-white">Like on Facebook</a></li>
                  <li><a href="#" class="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              <strong>Create Dog</strong>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
    </header>

    <main>
    </main>
    `
    const body = document.querySelector('body')
    body.innerHTML = header
}
//fire()









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