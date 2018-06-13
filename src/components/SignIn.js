import React from 'react'
import Tile from './Tile'

class SignIn extends React.Component {
  constructor(){
    super()
    this.state ={
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    if (e.target.id === "name"){
      this.setState({
        username: e.target.value
      })
    } else { // e.target.id === "password"
      this.setState({
        password: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.id === "login"){
      this.props.signIn(this.state.username, this.state.password)
    } else { // e.target.id === "register"
      // different fetch 
    }

  }


  render(){
    const title = [{value: "B"}, {value: "A"}, {value: "N"}, {value: "A"}, {value: "N"}, {value: "A"}, {value: "G"}, {value: "R"}, {value: "A"}, {value: "M"}, {value: "S"}]
    let tiletitle = title.map(letter => <td><Tile letter = {letter} /></td>)
    return(
      <div className="loginscreen">
        <table className="centered">
          <tbody>
            <tr>
              {tiletitle}
            </tr>
          </tbody>
        </table>
        <form id="login" onSubmit={this.handleSubmit}>
          <div className="ui form">
            <input id="name" type="text" className="two wide field" placeholder="Enter Your Name" onChange={this.handleChange} />
            <input id="password" type="text" className="two wide field" placeholder="Enter Your Password" onChange={this.handleChange} />
            <input className="ui yellow submit button" type="submit" />
          </div>
        </form>

        <form id="register" onSubmit={this.handleSubmit}>
          <div className="ui form">
            <input id="name" type="text" className="two wide field" placeholder="Enter Your Name" onChange={this.handleChange} />
            <input id="password" type="text" className="two wide field" placeholder="Enter Your Password" onChange={this.handleChange} />
            <input className="ui yellow submit button" type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
