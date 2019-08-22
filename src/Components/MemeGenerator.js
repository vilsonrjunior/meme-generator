import React, { Component } from "react"

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state={
      topText: "",
      bottomText: "",
      randomImage: "",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
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



render() {

  console.log(this.state.topText)
  console.log(this.state.bottomText)

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
              <br/>
          <input
              type="text"
              className="bottom"
              value={this.state.bottomText}
              name="bottomText"
              placeholder="Bottom text"
              onChange={this.handleChange}
              />
            <button>Gen</button>
          </form>
      </div>
    )
  }
}

export default MemeGenerator
