import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import {  List, ListItem } from "../components/List";

const ShowAll = (props)=>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        loadUsers()
        console.log(users)
    },[])


    const loadUsers = ()=>{
        API.getUsers().then(res => {
            console.log(res.data)
            setUsers(res.data)
            console.log(users)
        }).catch(err => console.log(err))
    }


    return(
        <div>
            <ul>
                <div>
                    {users.map(user => (
                        <div key={user._id}> 
                        <Link to ={ "/showall/" + user._id} >
                        <strong>
                        {user.name} 
                        </strong> 
                        </Link>
                        <ul>
                            {user.giftList.map(gift =>(
                                <ListItem key={gift.title}>
                                <List>
                                    {gift.title}
                                </List>
                                <List>
                                    <img src={gift.image} width="80px" height="80px" alt="gift" />
                                </List>
                                <List>
                                    {gift.link}
                                </List>
                                </ListItem>
                            ))}
                        </ul>
                        </div>
                    ))}
                </div>
            </ul>
            <Footer />
        </div>
    )
}

export default ShowAll;