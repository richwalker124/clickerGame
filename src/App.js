import React, { Component } from "react";
import logo from "./logo.svg";
// import Card from "./components/card/index.js";
// import Header from "./components/header/index.js";
// import Wrapper from "./components/wrapper/index.js";
import { Card, Header, Wrapper } from "./components";
import cardList from "./cardList.json";
import "./App.css";

class App extends Component {
  state = {
    cardList,
    score: 0,
    highscore: 0
  };

  clickCount = id => {
    this.state.cardList.find((card, i) => {
      if (card.id === id) {
        if (cardList[i].count === 0) {
          cardList[i].count = cardList[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.cardList.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cardList.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! \n Your score: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>
          CLICK GAME
        </Header>
        {this.state.cardList.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
