import React, { useEffect, useState } from "react";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import Footer from "../components/Footer"

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
            <List>
                {users.map(user => (
                    <>
                    <ListItem>
                        {user.name}
                    </ListItem>
                    <List>
                        {user.giftList.map(gift =>(
                            <>
                            <ListItem>
                                {gift.title}
                            </ListItem>
                            <ListItem>
                                {gift.image}
                            </ListItem>
                            <ListItem>
                                {gift.link}
                            </ListItem>
                            </>
                        ))}
                    </List>
                    </>
                ))}
            </List>
            <Footer/>
        </div>
       
    )
}

export default ShowAll;