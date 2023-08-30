// Start by adding a jokeService module to your services directory. Add a function here for Posting a new joke.


export const getAllJokes = async (joke) => {
    // build Post here to add to jokes as string and add key values here
    const newJoke = {
        id: 0,
        told: false,
        text: joke
    }
    const userInput = {
        method: "POST",
        headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(newJoke)
    }

    // postNewJoke into the empty string of "text"  was posting here on every render

 const response = await fetch(`http://localhost:8088/jokes`, userInput)
}
 

//await fetch(`http://localhost:8088/jokes`).then((res) => res.json())
//const response = await fetch("http://localhost:8088/jokes", postNewJoke)
// 

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