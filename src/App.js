import "./App.css"
import {  getAllJokes, 
          newJokePost, 
          jokeEdit, 
          jokeDelete} from "./services/jokeService"
import { useState, useEffect } from "react"


export const App = () => {
  const [allJokes, setAllJokes ] = useState ([])
  const [newJoke, setNewJoke] = useState([])
  const [unToldJokes, setUntoldOnly] = useState([])
  const [toldJokes, setToldJokes] = useState([])

  useEffect( () => {
    jokeEdit().then(() => {
      
    })
  }
  )

  useEffect( () => {
    jokeDelete().then(() => {
      
    })
  }
  )

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
      const toldJokes = allJokes.filter(
        (joke) => joke.told === true)
      const unToldJokeList = allJokes.filter(
        (joke) => joke.told === false)
      setToldJokes(toldJokes)
      
      setUntoldOnly(unToldJokeList)
    
  }
  , [ allJokes])




return  <div className="app-container">
        <header className="app-heading">
            <div >
            <img className="app-logo" src={ require(`./assets/steve.png`)} alt="Good job Steve" />
            </div>
              <h2 className="app-heading-text">Chuckle Checklist</h2>
            
         </header>
         
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
              


              <ul>
                {unToldJokes.map((joke) => {
                  return (
                     <section className="joke-list-container">
                        <div className="joke-list-container" key={joke.id}>
                          <div className="">
                            <li className="joke-list-container">
                              <p className="joke-list-item-text">{joke.text}</p>
                              <div className="joke-list-action-toggle"><button className="joke-list-action-toggle :hover">Toggle</button>
                              </div>
                              <div className="joke-list-action-delete"><button className="joke-list-action-delete :hover">Delete</button></div>
                            </li>
                          </div>
                        </div>
                        </section>  
                      
                         
                    
                  )
                })}
                </ul>


                <ul>
                {toldJokes.map((joke) => {
                  return (
                    
                     <section className="joke-list-container">
                        <div className="joke-list-container" key={joke.id}>
                          <div className="">
                            <li className="joke-list-container">
                              <p className="joke-list-item-text">{joke.text}</p>
                              <div className="joke-list-action-toggle"><button className="joke-list-action-toggle :hover">Toggle</button>
                              </div>
                              <div className="joke-list-action-delete"><button className="joke-list-action-delete :hover">Delete</button></div>
                            </li>
                          </div>
                        </div>
                        </section>  
                      
                         
                    
                  )
                })}
                </ul>
              </article>
          
        </div>
      
}




// We want our input field to clear once the joke has been posted. How can we do this? Currently, our input field modifies our state every time it changes, so our state is tied to our input field. Is there a way to tie our input field to our state? Try using that value attribute on the input element.

// display jokes at bottom using <li> , <p> , 

