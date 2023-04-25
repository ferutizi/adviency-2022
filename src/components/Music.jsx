import './Music.scss'
import { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'

const Music = () => {
  const [muted, setMuted] = useState(true)

  return (
    <>
      <button className='muted__button' onClick={() => setMuted(!muted)}>{muted ? '🔈' : '🔊'}</button>
      <ReactAudioPlayer
        src={require('../music/sleigh-bells-ringing.mp3')}
        autoPlay
        loop
        muted={muted}
        volume={0.5}
      />
    </>
  )
}

export default Music
