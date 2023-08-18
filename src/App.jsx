import { useState, useEffect } from "react"
import axios from "axios"

export default function App() {
    const [friends, setFriends] = useState([])
    const [picture, setPicture] = useState("")
    const [name, setName] = useState("")

    const getSavedFriends = async () => {
      const savedFriends = await axios.get('/api/friends')
      console.log(savedFriends)
      setFriends(savedFriends.data)
    }

    useEffect(()=> {
      getSavedFriends()
    }, [])

    const handleAddFriend = () => {
        setFriends([...friends, { name, picture }])
        setName('')
        setPicture('')
    }

    console.log(name, picture, friends)
    return (
        <div>
            <input
                placeholder="picture url"
                onChange={e => setPicture(e.target.value)}
            />
            <input placeholder="name" onChange={e => setName(e.target.value)} />
            <button onClick={handleAddFriend}>Add Friend</button>

            {friends.map(e => {
                return (
                    <div>
                        <img src={e.picture} />
                        <p>{e.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
