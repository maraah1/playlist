var choose_track = document.querySelector('button[type="button"]')
//console.log(choose_track)

choose_track.addEventListener('click', function(e) {
  window.location = "/Users/maraahlee/Documents/playlist/playlist1.html"

  e.preventDefault()
})

var frontPics = document.querySelector('.container')
//console.log(frontPics)
var musicObject = []

window.addEventListener('load', function(e) {
  fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then(response => response.json())
    .then(data => {
      //console.log(data)
      var musicInfo = data['results']['cover_art']
      console.log(musicInfo)
      for (var i = 0; i < musicInfo.length; i++) {
        var coverArt = musicInfo[i]
        //console.log(coverArt)
      }
      musicObject.push(coverArt)
      console.log(musicObject)
      //console.log(coverArt[Math.floor(Math.random() * data.length)])
      e.preventDefault()
    })
})

var back_pictures = document.querySelector('.secondpage_pictures')
//console.log(back_pictures)
var text_box = document.getElementById('text_box')
//console.log(text_box)
var musicDetails = []
//console.log(musicDetails)
// text_box2.push('hi')
// console.log(text_box2)

back_pictures.addEventListener("click", function(e) {

  fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then(response => response.json())
    .then(info => {
      var infoArray = info['results']
      for (var k = 0; k < infoArray.length; k++) {
        let text_box = document.getElementById('text_box')
        var back_pictures = {}
        back_pictures.id = infoArray[k].Id
        back_pictures.title = infoArray[k].Title
        back_pictures.artist = infoArray[k].Artist
        back_pictures.cover_art = infoArray[k].Cover_art
        console.log(back_pictures)
        musicDetails.push(back_pictures)
        text_box.innerText = back_pictures

        //return text_box.appendChild(back_pictures)
        // console.log(text_box)
        //musicObject.push(musicObjects)
        //console.log(back_pictures)
        // }
      }
    })

  e.preventDefault()
})

var clear_button1 = document.getElementById('clear_button1')
console.log(clear_button1)

clear_button1.addEventListener('click', function() {
  text_box.value = '';
});









//make a variable for album pics in an array, then make a loop to iterate through it, then make an addEventListener for whenever the page loads to upload 3 of those random pictures