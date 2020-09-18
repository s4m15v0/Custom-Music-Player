const songs = [
    "a_sky_full_of_stars.mp3",
    "amorsho.mp3",
    "bhashomaan.mp3",
    "blackfieldpain.mp3",
    "brothers_in_arms.mp3",
    "hotel_california.mp3",
    "layla.mp3",
    "like_a_stone.mp3",
    "stairway_to_heaven.mp3",
    "waterflower.mp3"
  ]
  
  const createSongList = ()=> {
    const list = document.createElement('ol')
  
    for(let i = 0; i<songs.length; i++){
      const item = document.createElement('li')
      item.appendChild(document.createTextNode(songs[i]))
  
      list.appendChild(item)
    }
    return list
  }
  
  document.getElementById('songList').appendChild(createSongList())
  
  songList.onclick = (e)=> {
    const clickedItem = e.target
    const source = document.getElementById('source')
    source.src = './music/' + clickedItem.innerText
  
    document.getElementById('currentlyPlayingSong').innerText = 'Currently Playing : '
    document.getElementById('currentSong').innerText = clickedItem.innerText
    
    player.load()
    player.play()
  }
  
  const playAudio = ()=> {
    if(player.readyState){
      player.play()
    }
  }
  const pauseAudio = ()=> {
    player.pause()
  }
  
  const slider = document.getElementById('volumeSlider')
  slider.oninput = (e)=>{
    const volume = e.target.value
    player.volume = volume
  }
  
  const updateProgress = ()=>{
    if(player.currentTime > 0){
      const progressBar = document.getElementById('progress')
      progressBar.value = (player.currentTime / player.duration) * 100
    }
  }
  