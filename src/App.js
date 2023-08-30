import "./App.css"
import { getAllJokes, newJokePost } from "./services/jokeService"
import { useState, useEffect } from "react"

export const App = () => {
  const [allJokes, setAllJokes ] = useState ([])
  const [newJoke, setNewJoke] = useState([])
  const [toldJokes, setToldJokes] = useState([])
  const [notToldJokes, setUntoldJokes] = useState([])

  useEffect( () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray) 
      console.log("Jokes Set!")
    })
  }, [])

// sets empty state
  useEffect ( () => {
    setNewJoke("")
  }, [allJokes])

// address logic so that repeated jokes do not add to database
  useEffect( () => {
    if (allJokes) {
      const toldJokes = allJokes.filter(
        (joke) => joke.told === false
      )
      const notToldJokes = allJokes.filter(
        (joke) => joke.told === true
      )
      setToldJokes(toldJokes)
      setUntoldJokes(notToldJokes)
    } 
  }
  , [allJokes])

  return  <div className="app-container">
  <div >
    <h1 className="app-heading-text">Chuckle Checklist</h1>
      <header className="app-heading"></header>
  </div>
  
  <div className="app-heading-circle">
   <img className="app-logo" src={ require(`./assets/steve.png`)} alt="Good job Steve" />
  </div>
 
  <div className="joke-add-form">
    <button className="joke-add-form" type="text" onClick={
      (submitEvent) => {
      newJokePost(newJoke)}}>Joke Me</button>
  
    <input
      className="joke-input"
      type="text"
      value={newJoke}
      placeholder="New One Liner"
      onChange={(clickEvent) => {
        setNewJoke(clickEvent.target.value)
      }}/>
  </div>
    
  </div>
}



// Now add a button for posting the new joke. When the user clicks on the button, a new joke with the text the user inputted should be added to the database. All new jokes added to the database should have the told property set to false.

// We want our input field to clear once the joke has been posted. How can we do this? Currently, our input field modifies our state every time it changes, so our state is tied to our input field. Is there a way to tie our input field to our state? Try using that value attribute on the input element.

