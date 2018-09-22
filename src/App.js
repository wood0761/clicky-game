import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import gameCardData from "./gameCards";
import GameImages from "./components/GameImages";
import { Container, Row, Col } from "./components/Grid";


class App extends Component {
  state = {
    pieces: JSON.parse(JSON.stringify(gameCardData)),
    score: 0,
    topScore: 0,
  }

  shuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[currentIndex].id = currentIndex + 1;
      array[randomIndex] = temporaryValue;
      array[randomIndex].id = randomIndex + 1; 
    }
  
    return array;
  }

  shuffleCurrentCards = () => {
    this.setState({pieces: this.shuffle(this.state.pieces)})
  }

  handleClick = (event, id) => {
    event.preventDefault();
    const data = this.state.pieces;
    // if the piece hasn't been clicked
   if(data[id-1].clicked === "false"){
      data[id-1].clicked = "true";
      this.setState({
        pieces: data,
        score: this.state.score + 1
      })
      this.shuffleCurrentCards();
   } 
   // if the piece has been clicked
   else {
    console.log(gameCardData)
      this.setState({pieces: JSON.parse(JSON.stringify(gameCardData))})
      if(this.state.score >= this.state.topScore){
        this.setState({
          topScore: this.state.score,
          score: 0
        })
        }
        else { this.setState({score: 0})}
   }
  }

  render() {
    return (
      <div>
        <Nav 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12" className="imageContainer">
          
            {this.state.pieces.map( gameCardData => (
              <GameImages
                id={gameCardData.id}
                key={gameCardData.id}
                name={gameCardData.name}
                image={gameCardData.image}
                handleClick={this.handleClick}
                clicked={gameCardData.clicked}
              />
            ))}
            
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
