import React, { useState, useEffect } from "react"

export default function MemeGenerator() {

const [bottomText, setBottomText] = useState();
const [topText, setTopText] = useState();
const [allMemeImgs, setAllMemeImgs] = useState();
const [randomImage, setRandomImage] = useState();


useEffect(async () => {
  const response = await fetch("https://api.imgflip.com/get_memes")
  const data = await response.json();
  const memes = data.data.memes
  setAllMemeImgs(memes);
}, []);

function handleTop(e) {
  const {value} = e.target
  setTopText(value)
}


function handleBottom(e) {
  const {value} = e.target
  setBottomText(value)
}


function handleClick(e) {
     e.preventDefault()
     const rand = Math.floor(Math.random() * allMemeImgs.length)
     const randMemeImg = allMemeImgs[rand].url
     setRandomImage(randMemeImg)
 }

   return(
      <div>
        <form className="meme-form">
         <input
              type="text"
              value={topText}
              name="topText"
              placeholder="Top text"
              onChange={handleTop}
              />
        <input
              type="text"
              className="bottom"
              value={bottomText}
              name="bottomText"
              placeholder="Bottom text"
              onChange={handleBottom}
              />
          <button onClick={handleClick}>Gen</button>
          </form>
          <div className="meme">
             <h2 onClick={handleClick} className="top">{topText}</h2>
                <img src={randomImage} />
             <h2 onClick={handleClick} className="bottom">{bottomText}</h2>
          </div>
      </div>
    )
  }

