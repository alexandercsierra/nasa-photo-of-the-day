import React, {useEffect, useState} from "react";
import "./App.css";
import Nav from "./components/Nav"
import Img from "./components/Img"
import Footer from "./components/Footer"
import axios from "axios"
import Select from "./components/Select"
import VideoLink from "./components/VideoLink"



function App() {

  const [imgState, setImgState] = useState("");
  const [descState, setDescState] = useState("");
  const [titleState, setTitleState] = useState("");
  const [isClickedState, setIsClickedState] = useState(false);
  const [date, setDate] = useState("")
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    const fetchImg = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${date}`)
        .then(response => {
          let url = response.data.url;
          let desc = response.data.explanation;
          let title = response.data.title;
          if (url.includes("youtube")){
            setIsVideo(true);
            let newUrl = "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png";
          desc = "The photo of the day was in fact a video that can be found below";
            setImgState(newUrl);
          } else {
            setIsVideo(false);
            setImgState(url);
          }
          
          setDescState(desc);
          setTitleState(title);
          console.log(imgState);
        })
        .catch(error => console.log(error))
    }
    fetchImg();
  }, [date])

  // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-01-01




  return (
    <div className="App">
      <Nav setIsClickedState = {setIsClickedState} isClickedState={isClickedState}/>
      {isClickedState === true && <Select date = {date} setDate = {setDate} setIsClickedState = {setIsClickedState}/>}
      <Img imgState = {imgState}/>
      <Footer descState = {descState} titleState = {titleState}/>
      {isVideo === true && <VideoLink />}

    </div>
  );
}

export default App;
