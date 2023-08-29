// Start by adding a jokeService module to your services directory. Add a function here for Posting a new joke.


export const getAllJokes = async () => {
    // build Post here to add to jokes as string and add key values here
    return fetch(`http://localhost:8088/jokes`).then((res) => res.json())
}

