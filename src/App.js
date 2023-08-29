import "./App.css"
import { getAllJokes } from "./services/jokeService"
import { useState, useEffect } from "react"


// export const App = () => {
//   return <div>Hello World!</div>
// }

// useEffect to fetch jokes and set to newJokes on initial render
export const App = () => {

const handleBtnClick = () => {

}
  //const [allJokes, setAllJokes ] = useState ([])
  //const [newJoke, setNewJoke] = useState([])

  useEffect( () => {
    getAllJokes().then((jokesArray) => {
      
      console.log("New Jokes Set!")
    })
  }, [])
// use POST here - 

//   useEffect( () => {
//     if (newJoke) {
//       const newJokeList = allJokes.filter(
//         (joke) => joke.told === false
//       )
//       setAllJokes(jokes)
//     } 
// }
//   , [ allJokes])

  return  <>
  <header className="app-heading"></header>
  <div className="app-heading-circle">
   <img className="app-logo" src={ require(`./assets/steve.png`)} alt="Good job Steve" />
 </div>

  <button className="joke-add-form" type="text" onClick={handleBtnClick}>Joke Me</button>
  <input
    className="joke-input"
    type="text"
    // value={/* What should go here? */}
    placeholder="New One Liner"
    onChange={(event) => {
      // What's the value of event?
    }}
  />
  </>
  


}


// Add a text input to your JSX and capture the user's input. What can be used to store the user's input? How do we capture the user's input?

// Start by adding a jokeService module to your services directory. Add a function here for Posting a new joke.

// Now add a button for posting the new joke. When the user clicks on the button, a new joke with the text the user inputted should be added to the database. All new jokes added to the database should have the told property set to false.

// We want our input field to clear once the joke has been posted. How can we do this? Currently, our input field modifies our state every time it changes, so our state is tied to our input field. Is there a way to tie our input field to our state? Try using that value attribute on the input element.

// complete Coach Steve img