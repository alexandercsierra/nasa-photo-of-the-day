import React, {useEffect, useState} from "react";
import "./App.css";
import Nav from "./components/Nav"
import Img from "./components/Img"
import Footer from "./components/Footer"
import Header from "./components/Header"
import axios from "axios"
import Select from "./components/Select"
import VideoLink from "./components/VideoLink"



function App() {

  const [imgState, setImgState] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [descState, setDescState] = useState("");
  const [titleState, setTitleState] = useState("");
  const [isClickedState, setIsClickedState] = useState(false);
  const [date, setDate] = useState("Today")
  const [isVideo, setIsVideo] = useState(false);

  //BEGIN ACTUAL API CALL THAT DOESN"T WORK BECAUSE I AM LOCKED OUT
  useEffect(() => {
    const fetchImg = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${date}`)
        .then(response => {
          let url = response.data.url;
          let desc = response.data.explanation;
          let title = response.data.title;
          if (url.includes("youtube")){
            setIsVideo(true);
            setVideoLink(url);
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
//END API CALL THAT DOESN'T WORK BECAUSE I'M LOCKED OUT

  // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-01-01
  //another comment


  // let nasaObj = {
  //   "copyright": "Egon Filter",
  //   "date": "2019-12-10",
  //   "explanation": "What are those streaks over the horizon? New Starlink satellites reflecting sunlight. SpaceX launched 60 Starlink communication satellites in May and 60 more in November. These satellites and thousands more are planned by communications companies in the next few years that may make streaks like these relatively common. Concern has been voiced by many in the astronomical community about how reflections from these satellites may affect future observations into space.  In the pictured composite of 33 exposures, parallel streaks from Starlink satellites are visible over southern Brazil. Sunflowers dot the foreground, while a bright meteor was caught by chance on the upper right. Satellite reflections are not new -- the constellation of 66 first-generation Iridium satellites launched starting 20 years ago produced some flares so bright that they could be seen during the day. Most of these old Iridium satellites, however, have been de-orbited over the past few years.    Infinite Loop: Create an APOD Station in your classroom or Science Center.",
  //   "hdurl": "https://apod.nasa.gov/apod/image/1912/StarlinkTrails_Filter_2048.jpg",
  //   "media_type": "image",
  //   "service_version": "v1",
  //   "title": "Starlink Satellite Trails over Brazil",
  //   "url": "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"
  //   }

    //   useEffect(() => {
    // const fetchImg = (obj) => {
      
    //       let url = obj.url;
    //       let desc = obj.explanation;
    //       let title = obj.title;
    //       if (url.includes("youtube")){
    //         setIsVideo(true);
    //         let newUrl = "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png";
    //       desc = "The photo of the day was in fact a video that can be found below";
    //         setImgState("");
    //         setVideoLink(url);
    //       } else {
    //         setIsVideo(false);
    //         setImgState(url);
    //       }
          
    //       setDescState(desc);
    //       setTitleState(title);
    //       console.log(imgState);
    //     }
    //     fetchImg(nasaObj);
    // })







  return (
    <div className="App">
      <Nav setIsClickedState = {setIsClickedState} isClickedState={isClickedState}/>
      {isClickedState === true && <Select date = {date} setDate = {setDate} setIsClickedState = {setIsClickedState}/>}
      <div className = "contentContainer">
        {/* <Header date = {date}/> */}
        {isVideo === false && <Img imgState = {imgState} descState = {descState} titleState = {titleState}/>}
        {isVideo === true && <VideoLink videoLink={videoLink}/>}
        <Footer descState = {descState} titleState = {titleState}/>
      </div>

    </div>
  );
}

export default App;
