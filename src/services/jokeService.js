// Start by adding a jokeService module to your services directory. Add a function here for Posting a new joke.
// divide the jobs out into sep func
// post new jokes with key values


export const getAllJokes = async() => {
    return fetch(`http://localhost:8088/jokes`).then((res) => res.json())
} // build Post here to add to jokes as string and add key values here


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

// add edit, and delete func .method "DELETE" , "PUT" - in database edit the localhost with?

export const jokeEdit = async() => {
    const editJoke = {}
     const res = await fetch (`http://localhost:8088/jokes/`
        ,{
        method: "PUT",
        headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(editJoke)
    })
await res.json()}


export const jokeDelete = async() => {
    const deleteJoke = {}
    const res = await fetch (`http://localhost:8088/jokes/`
    ,{
    method: "Delete",
    headers: {
            "Content-Type": "application/json"
    },
    body: JSON.stringify(deleteJoke)
})
await res.json()}
