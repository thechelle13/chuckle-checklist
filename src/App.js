import "./App.css"
import { getAllJokes } from "./services/jokeService"
import { useState, useEffect } from "react"

// useEffect to fetch jokes and set to newJokes on initial render
export const App = () => {


  const [allJokes, setAllJokes ] = useState ([])
  const [newJoke, setNewJoke] = useState([])
  const [toldJokes, setToldJokes] = useState([])
  const [notToldJokes, setUntoldJokes] = useState([])

  

  useEffect( () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray) 
      console.log("New Jokes Set!")
    })
  }, [])
// build way for allJokes to display at bottom - like cars and kneels.



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
  , [allJokes, setToldJokes, setUntoldJokes])

  
    // what does button do? use postNewJoke here if new, puts in array - if not do this -console.log("Whah, Whah...thats an old one.")
   

  return  <>
<div>
  <h2>Chuckle Checklist</h2>
  <header className="app-heading"></header>
</div>
  
  <div className="app-heading-circle">
   <img className="app-logo" src={ require(`./assets/steve.png`)} alt="Good job Steve" />
 </div>

  <button className="joke-add-form" type="text" onClick={(handleBtnClick) => {getAllJokes(newJoke)}}>Joke Me</button>
  <input
    className="joke-input"
    type="text"
    value={newJoke}
  //value of input here A form field element should have an id or name attribute
    placeholder="New One Liner"
    onChange={(event) => {
      setNewJoke(event.target.value)
    }}
  />
  {/* <ul>
    {/* {allJokes.map(joke => {
      <li key={joke.id}>{joke.text}</li>
    })}
  </ul> */} 
  </>

}


// Add a text input to your JSX and capture the user's input. What can be used to store the user's input? How do we capture the user's input?


// Now add a button for posting the new joke. When the user clicks on the button, a new joke with the text the user inputted should be added to the database. All new jokes added to the database should have the told property set to false.

// We want our input field to clear once the joke has been posted. How can we do this? Currently, our input field modifies our state every time it changes, so our state is tied to our input field. Is there a way to tie our input field to our state? Try using that value attribute on the input element.

