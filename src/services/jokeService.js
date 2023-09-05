// Start by adding a jokeService module to your services directory. Add a function here for Posting a new joke.
// divide the jobs out into sep func
// post new jokes with key values


export const getAllJokes = async() => {
    return fetch(`http://localhost:8088/jokes`).then((res) => res.json())
} 


export const newJokePost = async(text) => {

    const newJoke = {
        id: 0,
        told: false,
        text: text
    }

    const res = await fetch (`http://localhost:8088/jokes`
        ,{
        method: "POST",
        headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(newJoke)
    })

    await res.json()
    
}

// add edit, and delete func .method "DELETE" , "PUT" -  

export const jokeEdit = async(jokeEdited) => {
 
     const res = await fetch (`http://localhost:8088/jokes/${jokeEdited}`
        ,{
        method: "PUT",
        headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeEdited)
    })
    const editJoke = await res.json()
    return editJoke
}


export const jokeDelete = async(jokeDeleted) => {
    
    
    const res = await fetch (`http://localhost:8088/jokes/${jokeDeleted}`
    ,{
        method: "DELETE",
   
    })
    const deleteJoke = await res.json()
    return deleteJoke
}
