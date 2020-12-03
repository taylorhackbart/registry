import React, { useEffect, useState } from "react";
import API from "../utils/API";

const ShowAll = (props)=>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        loadUsers()
    },[])

    const loadUsers = ()=>{
        API.getUsers
    }
}

export default ShowAll;