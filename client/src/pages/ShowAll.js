import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import "./show.css"

const ShowAll = ()=>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        loadUsers()
        console.log(users)
    },[])


    const loadUsers = ()=>{
        API.getUsers().then(res => {
            console.log(res.data)
            const sortedUser = (res.data).sort((a,b)=> a.name > b.name ? 1: -1)
            setUsers(sortedUser)
            console.log(users)
        }).catch(err => console.log(err))
    }


    return(
        <div className="resultsContainer">
            <ul>
                <h3>List of Registries:</h3>
                <h5> Click on a user to see their wishlist</h5>
                <div className="usernameUpper">
                    {users.map(user => (
                        <div key={user._id}> 
                        <Link to ={ "/showall/" + user._id} >
                        <strong>
                        {user.name} 
                        </strong> 
                        </Link>
                        </div>
                    ))}
                    </div>
            </ul>
            
            <Footer />
        </div>
    )
}

export default ShowAll;