// listen for click on specific dog card.
// Render modal overlay in center of screen with image, name, breed, like button.
// clicking off modal should drop it
// clicking like button should add to the dogs total number of likes and the dog to the user's liked dogs.

const openModalButtons = document.querySelectorAll('#dog-card')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// console.log(openModalButtons)
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
                    .then(dog => {
                        debugger
                        openModal(dog)
                        
                    })
            grabDog()
            }
            console.log('yarp')

        }
    })
}

function openModal(dog) {
    const dogModal = `
    <div class="modal" id="dog-modal">
    <div class="dog-modal-header">
      <div class="title">${dog.name}</div>
      <button data-close-button class="close-button">&times;</button>
    </div>
    <div class="dog-modal-body">
      <img src=${dog.image} class="dog-avatar" />
      <h4>${dog.breed}</h4>
      <h4>${likeValue} ${ternary}</h4>
      <button class="like-btn"><3</button>
      </div>
    </div>
    `
      if (modal == null) return
      modal.classList.add('active')
      overlay.classList.add('active')
    }



// openModalButtons.forEach(dogCard => {
//   dogCard.addEventListener('click', () => {
//     const dogData = document.querySelector(dogCard.dataset.modalTarget)
//     openModal(dogData)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

function openModal(dog) {
const dogModal = `
<div class="modal" id="dog-modal">
<div class="dog-modal-header">
  <div class="title">${dog.name}</div>
  <button data-close-button class="close-button">&times;</button>
</div>
<div class="dog-modal-body">
  <img src=${dog.image} class="dog-avatar" />
  <h4>${dog.breed}</h4>
  <h4>${likeValue} ${ternary}</h4>
  <button class="like-btn"><3</button>
  </div>
</div>
`
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }


jakeMain()
