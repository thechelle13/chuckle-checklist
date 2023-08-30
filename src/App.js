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
              <h2 className="app-heading-text">Chuckle Checklist</h2>
            </div>
  
            <div className="app-heading-circle">
              <img className="app-logo" src={ require(`./assets/steve.png`)} alt="Good job Steve" />
            </div>

            <div className="joke-add-form">
              <input
                className="joke-input"
                type="text"
                value={newJoke}
                placeholder="New One Liner"
                onChange={(clickEvent) => {
                  setNewJoke(clickEvent.target.value)
                }}/>
              <button className="joke-add-form" type="text" onClick={
                (submitEvent) => {
                newJokePost(newJoke)}}>Joke Me</button>
            </div>
            
            <div>
              <div className="joke-lists-container">
                <div className="joke-list-container">
                  <h2>Told</h2>
                  <li ></li>
                </div>

                <div className="joke-list-container">
                  <h2>Untold</h2>
                  <li ></li>
                </div>
              </div>
            </div>
        </div>
}




// We want our input field to clear once the joke has been posted. How can we do this? Currently, our input field modifies our state every time it changes, so our state is tied to our input field. Is there a way to tie our input field to our state? Try using that value attribute on the input element.

// display told and untold at bottom using <li> , <p> , 

