import './VideoPlayer.css';
import video from '../../assets/music.mp4'

const VideoPlayer = ({playState, setPlayState})=>{
  

    const closePlayer = ()=>{
         setPlayState(false);
    }

    return (
        <div className={`video-player ${!playState?"hide":""}`} onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer