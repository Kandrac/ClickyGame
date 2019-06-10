import React, { Component } from "react";
import IconCard from "./components/IconCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import icons from "./icons.json";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  // Setting this.state.icons to the icons json array
  state = {
    icons: icons,
    topScore: 0,
    currentScore: 0,
    maxScore: 10,
    message: 'Click a Logo to begin',
    isClickedCorrect: true

  };
// Main click handler function
  handleSaveClick = id => {
    // Variable to hold the icons state.
    const iconsImage = this.state.icons;
    // Search through character icons to find the one that matches the clicked id.
    const imageClicked = iconsImage.filter(friend => friend.id === id);

    // If the friend isn't clicked...
    if (!imageClicked[0].clicked) {
      // ...set it to now be clicked
      imageClicked[0].clicked = true;
      // ...call this function to register the correct guess
      this.handleCorrectClick();
      // ...add the bouncy animation for correct guess
      //this.toggleAnimation(true);

      // ... randomize character icons
      this.randomizeCharacters(iconsImage);

      this.setState({ iconsImage });
      //alert("Congradulation!! You Won!");

    } else {
      this.handleIncorrectClick();
     // this.toggleAnimation(false);
    // alert("Sorry! You Clicked More Than Once!");
    }
  };

  // Function to randomize the characters
  randomizeCharacters = characters => {
    characters.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  // Handler for correct guesses/clicks
  handleCorrectClick = () => {
    this.setState({ isGuessCorrect: true });
    if (this.state.currentScore + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    if (this.state.currentScore + 1 >= this.state.maxScore) {
      this.setState({
        currentScore: this.state.currentScore + 1,
        message: "CONGRATS! YOU WIN!",
        messageClass: "correct"
      });
    } else {
      this.setState({
        currentScore: this.state.currentScore + 1,
        message: "YOU GUESSED CORRECTLY!",
        messageClass: "correct"
      });
    }
  };

  // Handler for incorrect guesses/clicks
  handleIncorrectClick = () => {
    this.setState({
      message: "INCORRECT. PLEASE TRY AGAIN!",
      isGuessCorrect: false
    });
    // this.toggleIncorrectAnimation();
    this.resetGame();
  };

  // Resets the game
  resetGame = id => {
    const iconsImage = this.state.icons;
    for (let i = 0; i < iconsImage.length; i++) {
      iconsImage[i].clicked = false;
    }
    this.setState({ currentScore: 0 });
  };

  // Map over this.state.icons and render a IconCard component for each friend object
  render() {

  //  }
return (
<Wrapper>
  <div>
    <Nav
    topScore={this.state.topScore}
    currentScore={this.state.currentScore} 
    message={this.state.message}
    /> 
  </div>
    <Header/>
     
        {this.state.icons.map(friend => (
          <IconCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clickHandler={this.handleSaveClick}
          />
        ))}
  </Wrapper>
    );
  }
}

export default App;