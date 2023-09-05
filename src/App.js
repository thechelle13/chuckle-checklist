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
  const [count, setCount] = useState([0])

  
  const jokeCount = () => {
        setCount(count + 1)
      }


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


  
  useEffect ( () => {
    setNewJoke("")
  }, [allJokes])

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
            <div className="app-heading-circle">
              <img className="app-logo" src={ require(`./assets/steve.png`)} alt="Good job Steve" />
            </div>
          </header>
          <div className="app-heading-text">
              <h2 >Chuckle Checklist</h2>
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
              <button className="joke-input-submit" type="text" onClick={
                (submitEvent) => {
                newJokePost(newJoke)}}>Joke Me</button>
            </div>      
            
          <article className="app-container">

              <div className="joke-lists-container untold-count"></div>
                <h2>Untold 
                  <span className="untold-count" key={jokeCount}>{unToldJokes.length }
                  </span>
                </h2>
                <ul>
                {unToldJokes.map((joke) => {
                  return (
                    
                  <section className="joke-list-container" key={joke.id}>
                      
                    <li className="joke-list-item">
                      <p className="joke-list-item-text">{joke.text}</p>
                        <div className="joke-list-action-toggle">
                          <button className="joke-list-action-toggle :hover">Toggle</button>
                        </div>
                        <div className="joke-list-action-delete">
                          <button className="joke-list-action-delete :hover">Delete</button>
                        </div>
                    </li>
                  </section> 
                )
                }
                )}
                </ul>

                
                <div className="joke-lists-container told-count"></div>
                  <h2>Told 
                    <span className="told-count" key={jokeCount}>{toldJokes.length}
                    </span>
                  </h2> 
                  <ul>               
                    {toldJokes.map((joke) => {
                    return (
                    <section className="joke-list-container" key={joke.id}>
                            <li className="joke-list-item">
                              <p className="joke-list-item-text">{joke.text}</p>
                              <div className="joke-list-action-toggle">
                                <button className="joke-list-action-toggle :hover">Toggle</button>
                              </div>
                              <div className="joke-list-action-delete">
                                <button className="joke-list-action-delete :hover">Delete</button>
                              </div>
                            </li>
                      </section>                                                              
                  )
                })}
                </ul>
            </article>
          
        </div>
      
}



