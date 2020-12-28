import { useState,useRef } from 'react';
import ReactPlayer from 'react-player';
import { PlayButton, PauseButton } from '../../assets/index';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import screenfull from 'screenfull';

import { connect } from 'react-redux';

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}



const PrettoSlider = withStyles({
  root: {
    color: '#EFC81A',
    height: 8,
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -5,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 5,
    borderRadius: 2,
  },
  rail: {
    height: 5,
    borderRadius: 2,
  },
})(Slider);

const format = (seconds) => {
  if (isNaN(seconds)) {
    return '00:00'
  }
  const data = new Date(seconds * 1000)
  const hh = data.getUTCHours()
  const mm = data.getUTCMinutes().toString().padStart(2,"0")
  const ss = data.getUTCSeconds().toString().padStart(2,"0")
  if (hh) {
    return `${hh}:${mm}:${ss}`
  }
  return `${mm}:${ss}`
}

let count = 0

function DetailVideo(props) {
  const playerRef = useRef(null)
  const playerContainerRef = useRef(null);
  const toggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current)
  }
  const [seeking, setSeeking] = useState(false)
  const [played,setplayed] = useState(0)
  const handleProgress = (updateState) => {

    if (count>3) {
      setShowButton('none')
      setOnPlay('#00000000')
      count = 0
    }

    if (showButton === 'unset') {
      count+=1
    }

    if (!seeking) {
      setplayed(updateState.played)
    }
  }
  const handleOnSeekChange = (e,newValue) => {
    setplayed(parseFloat(newValue / 100))
  }
  const handleOnSeekMouseDown = (e) => {
    setSeeking(true)
  }
  const handleOnSeekMouseUp = (e,newValue) => {
    setSeeking(false)
    playerRef.current.seekTo(newValue / 100)
  }
  const currTime = playerRef.current ? playerRef.current.getCurrentTime() : '00:00'
  const duration = playerRef.current ? playerRef.current.getDuration() : '00:00'

  const progressTime = format(currTime)
  const totalDuration = format(duration)

  const [isPlay,setPlay] = useState(false);
  const [onPlay,setOnPlay] = useState('#00000070')
  const [buttonChange,setButtonChange] = useState(PlayButton)
  const [showButton,setShowButton] = useState('unset')
  const changeSta = (param) => {
    // console.log(param);
    if (!param) {      
      setOnPlay('#00000000') 
      setButtonChange(PauseButton)
    } else {
      setOnPlay('#00000070')
      setButtonChange(PlayButton)
    }
  }
  // console.log(onPlay);
  const video = ["http://localhost:4000/videos/video-1609140525439.mp4 ","http://localhost:4000/videos/video-1609140525760.mp4 ","http://localhost:4000/videos/video-1609140525839.mkv "]
  return (
    <div className="position-relative container-fluid pt-0 px-0 px-md-3 px-xl-5">
      <div className="w-100 full-h d-flex justify-content-center pt-5 px-0 px-md-3 px-xl-5">
        <div className="w-100 h-100 d-flex flex-column flex-md-row pt-md-5 mt-5">
          <div className="col-12 col-lg-8 px-0">
            <div className="w-100">
              <div ref={playerContainerRef} className="detail-video-player">
                <ReactPlayer
                  ref={playerRef}
                  url={video[2]} 
                  playing={isPlay}
                  className={'detail-video-player'}
                  width={'100%'}
                  height={'100%'}
                  onProgress={handleProgress}
                />
                <div className="detail-video w-100 h-100" style={{backgroundColor: onPlay}} 
                onMouseLeave={()=>{
                  if (isPlay) {
                    setShowButton('none') 
                    setOnPlay('#00000000') 
                  }else{
                    setShowButton('unset')
                    setOnPlay('#00000070')
                  }
                }}
                onMouseEnter={()=>{
                  setShowButton('unset'); 
                  setOnPlay('#00000070');
                  count = 0
                }}
                onClick={(e)=>{
                  e.preventDefault()
                  showButton === 'none' && setShowButton('unset')
                }}>
                  <div className="w-100 p-5"></div>
                  <div className="d-flex justify-content-center">
                    <img src={buttonChange} alt="button" className="clicked" 
                    style={{width:'48px',height:'60px', display: showButton}} 
                    onClick={(e)=>{e.preventDefault(); setPlay(!isPlay); changeSta(isPlay)}}/>
                  </div>
                  <div className="container-fluid px-4 d-flex flex-column">
                    <PrettoSlider 
                      min={0} 
                      max={100} 
                      value={played * 100} 
                      ValueLabelComponent={(props) => 
                       <ValueLabelComponent {...props} value={progressTime}/>
                      }
                      onChange={handleOnSeekChange}
                      onMouseDown={handleOnSeekMouseDown}
                      onChangeCommitted={handleOnSeekMouseUp}/>
                    <div className="w-100 d-flex justify-content-between align-items-center" >
                      <span className="text-light" style={{display:showButton}}>{progressTime} | {totalDuration}</span>
                      <span onClick={toggleFullScreen} className="text-light h2 clicked text-decoration-none mb-1" style={{display:showButton}}>▣</span>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="px-3 px-md-0 my-4">{`${props.recipe.dataRecipe.recipe_name} - [Step ${props.history.location.pathname.split('/')[3]}]`}</h1>
            </div>
          </div>

          <div className="col-12 col-lg-4 pr-md-0">

          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({recipe}) => {
  return{
    recipe
  }
}

export default connect(mapStateToProps)(DetailVideo)