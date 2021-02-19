// listen for click on specific dog card.
// Render modal overlay in center of screen with image, name, breed, like button.
// clicking off modal should drop it
// clicking like button should add to the dogs total number of likes and the dog to the user's liked dogs.
//                                   //                              //
//                                   //                              //
//                       OVERHEAD STUFF                              //
//                                   //                              //
//                                   //                              //
function ce(tag){
    return document.createElement(tag)
}




const jakeMain = () => {
    //debugger
    console.log(10)
    grandClickListener()
    buildDog()
}

//                                   //                              //
//                                   //                              //
//                       DOG CARD STUFF                              //
//                                   //                              //
//                                   //                              //




//function grandClickListener() {
//    const likeBtn = document.querySelector('button.like-btn')
//    mainSection.addEventListener('click', function(e) {
//        console.log("hello")
//        const dogId = e.target.parentElement.parentElement.dataset.dog
//        console.log(dogId)
//        if (e.target.className === "like-btn"){
//            e.preventDefault()
//            console.log('yarp')
//            // debugger
//            getDogForLikes = () => {
//                fetch(`http://localhost:3000/animals/${dogId}`)
//                    .then(resp => resp.json())
//                    .then(console.log('yolooooooo'))
//                    .then(dog => {
//                        // debugger
//                        handleLikeButton(dog)
//                        
//                    })
//            }
//            getDogForLikes() 
//        }
//        if (e.target.className === "adopt-btn") {
//            e.preventDefault()
//            console.log('ARF ARF')
//            getDogForAdoption = () => {
//                fetch(`http://localhost:3000/animals/${dogId}`)
//                    .then(resp => resp.json())
//                    .then(console.log('yolooooooo'))
//                    .then(dog => {
//                        // debugger
//                        handleAdoptButton(dog)
//                        
//                    })
//            }
//            getDogForAdoption() 
//        }
//    })
//}
function grandClickListener(){
const mainSection = document.querySelector('.py-5');
const likeBtn = document.querySelector('button.like-btn')
const adoptBtn = document.querySelector('button.adopt-btn')
//debugger
likeBtn.addEventListener('click', function(e) {
        e.preventDefault()
            console.log('yarp')
            //const dogId = e.target.parentElement.parentElement.dataset.dog
            // debugger
            getDogForLikes = () => {
                fetch(`http://localhost:3000/animals/${dogId}`)
                    .then(resp => resp.json())
                    .then(console.log('yolooooooo'))
                    .then(dog => {
                        // debugger
                        handleLikeButton(dog)
                        
                    })
            }
            getDogForLikes() 

})
adoptBtn.addEventListener('click', function(e) {
    e.preventDefault()
            console.log('ARF ARF')
            //debugger
            const dogId = e.target.parentElement.parentElement.dataset.dog
            getDogForAdoption = () => {
                fetch(`http://localhost:3000/animals/${dogId}`)
                    .then(resp => resp.json())
                    .then(console.log('yolooooooo'))
                    .then(dog => {
                        // debugger
                        handleAdoptButton(dog)
                        
                    })
                }
            getDogForAdoption() 
})
}   



//                                   //                              //
//                                   //                              //
//                        LIKES OF DOGS                              //
//                                   //                              //
//                                   //                              //


const handleLikeButton = dog => {
    const userId = 1
    // const likeCount = parseIntdog.target.parentElement.children[2].innerText.split(" ")[0];
    // assemble an object to pass to the patch request
    // send the dog's
    // send the current like count and add 1 to account for the new like
    const likeData = {
      animal_id: dog.id,
      user_id: userId
    }
  
    // assemble a PATCH/POST request object
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(likeData)
    }
    fetch(`http://localhost:3000/likes`, reqObj)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        // generateDogs();
      })
      .catch(err => console.log(err))
  
  }

//                                   //                              //
//                                   //                              //
//                           ADOPT A DOG                             //
//                                   //                              //
//                                   //                              //


const handleAdoptButton = (dog) => {
    console.log(`http://localhost:3000/animals/${dog.id}`)
     //debugger
    fetch(`http://localhost:3000/animals/${dog.id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(dog => {
        console.log(dog)
        console.log('dog deleted')
        //mainSection.remove(dog)
        startCardsIndex()
    })
    //startCardsIndex()
    console.log("dog refreshed")
    //generateDog()
    
}

   // headers: {
        //     'Content-Type': 'application/json'
        // }, 
        // body: JSON.stringify(dog)

//                                   //                              //
//                                   //                              //
//                        CREATE A DOG                               //
//                                   //                              //
//                                   //                              //

//const createBtn = document.querySelector(".create-btn");
//const createBtn = document.querySelector("#conjure-dog-btn");
const buildDog = () => {
    const createBtn = document.querySelector("#conjure-dog-btn");
    //const conjureForm = `
    //<div class="create-form-div">
    //<form class="add-dog-form">
    //  <input type="text" name="name" value="" placeholder="Dog Name" class="name-input-text"/>
    //  <br />
    //  <input type="text" name="breed" value="" placeholder="Dog Breed" class="breed-input-text"/>
    //  <br />
    //  <input type="text" name="image" value="" placeholder="Dog image URL" class="img-input-text"/>
    //  <br />
    //  <input type="submit" name="submit" value="Create" class="submit"/>
    //  </form>
    //</div>
    //`
    const conjureForm = `<div class="container">
    <form id="add-dog-form" class="was-validated">
      <div class="form-group">
        <label for="uname">Create a New Dog</label>
        <input type="text" class="form-control" id="name-input-text" placeholder="Dog Name" name="name" required>
        <div class="valid-feedback">Valid.</div>
        <input type="text" class="form-control" id="breed-input-text" placeholder="Dog Breed" name="breed" required>
        <div class="valid-feedback">Valid.</div>
        <input type="text" class="form-control" id="img-input-text" placeholder="Dog image URL" name="image" required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <div class="invalid-feedback">Check this checkbox to continue.</div>
        </label>
      </div>
      <button id="sign-up-btn" type="submit" name="submit" value="Create" class="btn btn-primary">Submit</button>
    </form>
  </div>`
  
    createBtn.addEventListener("click", () => {
        console.log("CREATE ME")
        //const body = document.querySelector('body')
        const formCard = document.querySelector('#dog-form-container')
        formCard.innerHTML +=  conjureForm
        let createForm = document.querySelector('#add-dog-form')
        let createFormName = document.querySelector('#name-input-text')
        let createFormImg = document.querySelector('#img-input-text')
        let createFormBreed = document.querySelector('#breed-input-text')

        createForm.addEventListener('submit', event => {
        // debugger
        event.preventDefault()
        handleNewDog(event)
        })   

    const handleNewDog = (event) => {
        let data = {
            name: createFormName.value,
            breed: createFormBreed.value,
            image: createFormImg.value,
            } 
            console.log(data)

        createForm.reset()
        const reqObj = { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }
        // debugger
            fetch('http://localhost:3000/animals', reqObj)
                .then(res => res.json())
                .then(newDog => {
                    //createCard(newDog);
                    startCardsIndex()
                })
             }
        })
    }

// // save new dog


// const handleNewDog = (target) => {

// let data = {
//     name: createForm[0].value,
//     image: createForm[1].value,
//     breed: createForm[2].value.id,
// } 
// createForm.reset()

//     fetch('http://localhost:3000/animals', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(data)
//     })
//     .then(res => res.json())
// }




