import React, { Component } from "react"

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state={
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

componentDidMount() {
  fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      const {memes} = response.data
      this.setState({ allMemeImgs: memes })
    })
}

handleChange(event) {
  const {name, value} = event.target
    this.setState({
      [name]: value
    })
}

handleClick(event) {
  console.log('clicked')
}


render() {
   return(
      <div>
          <form className="meme-form">
          <input
              type="text"
              value={this.state.topText}
              name="topText"
              placeholder="Top text"
              onChange={this.handleChange}
              />
          <input
              type="text"
              className="bottom"
              value={this.state.bottomText}
              name="bottomText"
              placeholder="Bottom text"
              onChange={this.handleChange}
              />
            <button onClick={this.handleClick}>Gen</button>
          </form>
          <div className="meme">
            <h2 className="top">{this.state.topText}</h2>
            <img src={this.state.randomImage} alt="random"/>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
      </div>
    )
  }
}

export default MemeGenerator
