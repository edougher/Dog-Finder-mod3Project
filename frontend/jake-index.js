// listen for click on specific dog card.
// Render modal overlay in center of screen with image, name, breed, like button.
// clicking off modal should drop it
// clicking like button should add to the dogs total number of likes and the dog to the user's liked dogs.
const ce = document.createElement(tag)

const jakeMain = () => {
    grandClickListener()
}

function grandClickListener() {
    const mainSection = document.querySelector('.py-5')
    mainSection.addEventListener('click', function(e) {
        console.log(e)
        if (e.target.className === "card-img-top"){
            const dogId = e.target.parentElement.dataset.dog
            grabDog = () => {
                fetch(`http://localhost:3000/animals/${dogId}`)
                    .then(resp => resp.json())
                    .then(console.log('yolooooooo'))
                    .then(dog => {
                        // debugger
                        openModal(dog)
                        
                    })
            }
            grabDog()
            console.log('yarp')

        }
    })
}

function openModal(dog) {
    console.log("meow")
    const dogModal = ce("modal")
    
    dogMogal.innerHTML = `
    <div class="modal" id="dog-modal">
    <div class="dog-modal-header">
      <div class="title">${dog.name}</div>
      <button data-close-button class="close-button">&times;</button>
    </div>
    <div class="dog-modal-body">
      <img src=${dog.image} class="dog-avatar" />
      <h4>${dog.breed}</h4>
      <h4>0</h4>
      <button class="like-btn"><3</button>
      </div>
    </div>
    `
      if (modal == null) return
      modal.classList.add('active')
      overlay.classList.add('active')
    }


jakeMain()
