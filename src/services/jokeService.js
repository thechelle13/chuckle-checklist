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
    // 
}

// export const saveSurveySubmission = async () => {
//     const postOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(transientState)
//     }
//     const response = await fetch ("http://localhost:8088/submissions", postOptions)
//     const customEvent = new CustomEvent("newSubmissionCreated")
//     document.dispatchEvent(customEvent)
// }