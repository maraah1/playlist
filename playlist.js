let choose_track = document.querySelector('button[type="button"]')

choose_track.addEventListener('click', function(e) {
  window.location = "playlist1.html"

  e.preventDefault()
})

let frontPics = document.querySelector('.container')

let musicObject = []

window.addEventListener('load', function(e) {
  fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then(response => response.json())
    .then(data => {
      let musicInfo = data['results']['cover_art']
      musicObject.push(musicInfo)
      e.preventDefault()
    })
})

let back_pictures = document.querySelector('.secondpage_pictures')

let text_box = document.getElementById('text_box')

let musicDetails = []


back_pictures.addEventListener("click", function(e) {

  fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then(response => response.json())
    .then(info => {
      let infoArray = info['results']
      for (let k = 0; k < infoArray.length; k++) {
        let text_box = document.getElementById('text_box')
        let back_pictures = {}
        back_pictures.id = infoArray[k].Id
        back_pictures.title = infoArray[k].Title
        back_pictures.artist = infoArray[k].Artist
        back_pictures.cover_art = infoArray[k].Cover_art
        musicDetails.push(back_pictures)
        text_box.innerText = back_pictures
      }
    })

  e.preventDefault()
})

let clear_button1 = document.getElementById('clear_button1')


clear_button1.addEventListener('click', function() {
  text_box.value = '';
});