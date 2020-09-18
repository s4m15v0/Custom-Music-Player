const songs = [
    "A_Sky_Full_of_Stars.mp3",
    "Amorsho.mp3",
    "Bhashomaan.mp3",
    "Pain.mp3",
    "Brothers_in_Arms.mp3",
    "Hotel_California.mp3",
    "Layla.mp3",
    "Like_a_Stone.mp3",
    "Stairway_To_Heaven.mp3",
    "Kayleigh.mp3"
    
  ]const createSongList = ()=> {
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
  