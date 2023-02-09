import React, { useEffect } from 'react'
import MusicCard from '../../components/MusicCard'

//styles 
import "./Main.scss"


//hooks
import { useSongs } from '../../hooks/useSongs'

//services
import { songsService } from '../../services/songs.services'

const Main = () => {
  const { songs, saveSongs } = useSongs()

  useEffect( () => {
    const fetch = async () => {
      const songs = await songsService.getReccomendation()

      saveSongs(songs.tracks)
    }

    fetch()
  }, [])

  return (
    <div className='main_page'>
      {
        songs?.length && songs.map((item, idx) => (
          <MusicCard key={idx} {...item}  />
        ))
      }
    </div>
  )
}

export default Main