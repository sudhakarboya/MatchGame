import {Component} from 'react'

import TabCard from '../TabCard'
import ImageContainer from '../ImageContainer'

class MatchGame extends Component {
  state = {
    score: 0,
    timeElapsedInSeconds: 60,
    activeTabId: 'FRUIT',
    displayImgObj: {
      id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
      category: 'FRUIT',
    },
  }

  
  
  intervalId=setInterval(function(){
    this.setState(prevState=>({timeElapsedInSeconds:prevState.timeElapsedInSeconds-1}))
  },1000)
  
  

  selectImgCategory = id => {
    this.setState({activeTabId: id})
  }

  renderTabCardContainer = () => {
    const {tabsList} = this.props
    return (
      <ul>
        {tabsList.map(eachTab => (
          <TabCard
            tabDetails={eachTab}
            key={eachTab.tabId}
            selectImgCategory={this.selectImgCategory}
          />
        ))}
      </ul>
    )
  }

  getImages = () => {
    const {tabsList, imagesList} = this.props
    const {activeTabId} = this.state
    const updatedImagesList = imagesList.filter(
      eachImg => eachImg.category === activeTabId,
    )
    return updatedImagesList
  }

  onClickImg = id => {
    const {displayImgObj} = this.state
    const {imagesList} = this.props
    const clickedImg = imagesList.find(eachImg => eachImg.id === id)
    if (clickedImg.id === displayImgObj.id) {
      const randomImageIndex = Math.ceil(Math.random() * imagesList.length)
      const randomImg = imagesList[randomImageIndex]
      this.setState(prevState => ({
        score: prevState.score + 1,
        displayImgObj: randomImg,
      }))
    }
  }

  renderImgContainer = () => {
    const displayImgs = this.getImages()

    return (
      <ul>
        {displayImgs.map(eachImg => (
          <ImageContainer
            key={eachImg.id}
            imgDetails={eachImg}
            onClickImg={this.onClickImg}
          />
        ))}
      </ul>
    )
  }

  

  render() {
    this.timerUpdate()
    const {score, timeElapsedInSeconds, displayImgObj} = this.state
    const displayImageUrl = displayImgObj.imageUrl
    

    return (
      <div>
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
              alt="website logo"
            />
          </div>
          <div>
            <p>score:{score}</p>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p>{timeElapsedInSeconds} Sec</p>
            </div>
          </div>
          <img src={displayImageUrl} alt="match" />
          {this.renderTabCardContainer()}
          {this.renderImgContainer()}
        </div>
      </div>
    )
  }
}
export default MatchGame
