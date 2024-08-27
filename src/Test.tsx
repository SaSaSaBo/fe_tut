import { useEffect, useState } from "react"

export default function Test() {

    const [postId, setPostId] = useState(1)
    const [post, setPost] = useState(false)

    useEffect(() => {
        console.log('Components run when first loaded.')
        fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response => response.json())
        .then(json => setPost(json))
        // But when we add this here the log work only once
        let interval = setInterval(() => console.log('Interval worked'), 1000)
        return () => {
            console.log('Components destroyed')
            clearInterval(interval)
            // Like that the interval will be destroyed
        }
    }, [])

/*
    useEffect(() => {
        console.log('Components is been render')
    })
*/

    useEffect(() => {
        // console.log('PostId is been changed = ', postId)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId])
    // When we use like this only the log gonna work every time we push the button


    return (
        <div>
            <h3>{postId}</h3>
            { post && JSON.stringify(post) }
            <button onClick={() => setPostId(postId => postId + 1)}>Topics</button>
            <hr />
            Test.tsx file component
        </div>
    )
}

