import "./App.css"
import { getAllJokes, newJokePost } from "./services/jokeService"
import { useState, useEffect } from "react"

export const App = () => {
  const [allJokes, setAllJokes ] = useState ([])
  const [newJoke, setNewJoke] = useState([])
  const [unToldJokes, showUntoldOnly] = useState([])
  const [filterJokes, setFilterJokes] = useState([])
  

  useEffect( () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray) 
      console.log("Jokes Set!")
    })
  }, [])

  // sets empty state here instead of doing as transient
  useEffect ( () => {
    setNewJoke("")
  }, [allJokes])

  // address logic so that repeated jokes do not add to database?

  useEffect( () => {
    if (unToldJokes) {
      const unToldJokeList = allJokes.filter(
        (joke) => joke.told === false
      )
      setFilterJokes(unToldJokeList)
      } else {
      setFilterJokes(allJokes)
    } 
  }
  , [unToldJokes, allJokes])

return  <div className="app-container">
   
            <div >
            
              <h2 className="app-heading-text">Chuckle Checklist</h2>
              
            </div>
            
            
              <img className="app-logo" src={ require(`./assets/steve.png`)} alt="Good job Steve" />
            
         
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

            
            <article className="joke-lists-container">
              <header>Joke List</header>
                {filterJokes.map((joke) => {
                  return (
                    <> 
                      <section>
                        <div className="joke-input" key={joke.id}>
                          <ul className="joke-input">
                            <li className="joke-list-item">{joke.text}
                              <button className=""></button>
                              <button className=""></button>
                            </li>
                          </ul>
                        </div>  
                      </section> 
                         
                    </>
                  )
                })}
              </article>
          
        </div>
}




// We want our input field to clear once the joke has been posted. How can we do this? Currently, our input field modifies our state every time it changes, so our state is tied to our input field. Is there a way to tie our input field to our state? Try using that value attribute on the input element.

// display jokes at bottom using <li> , <p> , 

