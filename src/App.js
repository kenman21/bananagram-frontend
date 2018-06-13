import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import { Redirect } from 'react-router'
import SignIn from './components/SignIn'
import Lobby from './components/Lobby'
import Game from './components/Game'

const URL = 'http://localhost:3000/api/v1/'

class App extends Component {

  constructor(){
    super()
    this.state = {
      currentUser: null,
      games: [],
      openGameroom: null
    }

  }

  componentDidMount = () => {
    fetch(URL + 'games')
    .then(res => res.json())
    .then(res => this.setState({
      games: res.reverse()
    }))
  }

  signInorRegister = (word , username, password) => {
    return fetch(URL + `users/${word}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: username,
          password: password
        }
      })
    }).then(res => res.json()).then((res) => {

      if (!res.errors) {
        this.setState({
          currentUser: res
        }, () => localStorage.currentUser = JSON.stringify(this.state.currentUser))
      }
    })
  }

  handleClick = (gameId) => {
    console.log(this.state.currentUser)
    fetch(URL + `games/${gameId}/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: this.state.currentUser.id})
    })
    .then(resp => resp.json())
    .then(game =>
      this.setState({
      openGameroom: game
    }))
  }

  leaveGame = () => {
    this.setState({
      openGameroom: null
    })
  }

  createGame = () => {
    fetch(URL + 'games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }).then(res => res.json()).then(game =>
      this.setState({
        games: [game, ...this.state.games]
      }))
  }

  removeLetter = (letter_id) => {
		let newLetters = this.state.openGameroom.letters.filter(letter => letter.id !== letter_id)

		let newGameroom = {...this.state.openGameroom}

		newGameroom.letters = newLetters

		this.setState({
			openGameroom: newGameroom
		})

	}

  peelLetter = (users_letters) => {
    console.log('here')
    Object.values(users_letters).forEach(letter => this.removeLetter(letter.id))

    // let newLetters = this.state.openGameroom.letters.filter(letter => letter.id !== letter_id)
    //
		// let newGameroom = {...this.state.openGameroom}
    //
		// newGameroom.letters = newLetters
    //
		// this.setState({
		// 	openGameroom: newGameroom
		// })
  }

  MySignIn = () => {
    return (<SignIn signInorRegister={this.signInorRegister} />)
  }

  MyLobby = () => {
   return (<Lobby currentUser={this.state.currentUser} games={this.state.games}/>)
  }

  render() {
    // console.log(this.state.openGameroom);
    // console.log(this.state.currentUser);
    return (
      <Router>
        <div>
          <Route exact path="/" render={({history})=><SignIn signInorRegister={this.signInorRegister} history={history}/>}/>
          <Route path="/lobby" render={({history})=><Lobby currentUser={this.state.currentUser} games={this.state.games} handleClick={this.handleClick} createGame={this.createGame} history={history}/>}/>
          <Route path="/game/:id" component={Game} />
        {/*
        <div>
          {this.state.currentUser ? <Redirect to='/lobby'/> : <Redirect to='/signin'/>}
          <Route exact path='/lobby' render={this.MyLobby} />
          <Route exact path='/signin' render={this.MySignIn} />
          {this.state.currentUser ? null : <SignIn signInorRegister={this.signInorRegister} />}
          {this.state.openGameroom && this.state.currentUser ? <Game openGameroom={this.state.openGameroom} leaveGame={this.leaveGame} currentUser={this.state.currentUser} removeLetter = {this.removeLetter} peelLetter={this.peelLetter}/>: null}
          {!this.state.openGameroom && this.state.currentUser ? <Lobby currentUser={this.state.currentUser} games={this.state.games} handleClick={this.handleClick} createGame={this.createGame}/> : null}
        </div>
        */}
        </div>
      </Router>
    )
  }
}

export default App;
