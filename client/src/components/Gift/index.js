import React, {useState} from "react";
import API from "../../utils/API"
import {Input,FormBtn} from "../Form"

const Gift = (props)=>{
    // const [gifts, setGift] = useState([])
    const [user, setUser] = useState({
        name: "",
        giftList: [],
      });
    const [formObject, setFormObject] = useState({})
    console.log("props: "+props.list)
    // setGift(props.list)
    // console.log("state: "+gifts)

    const setGifts=()=>{
        console.log(props.list)
        setUser(props.list)
        // setGift(props.list);
        // console.log(gifts)
    }
    setGifts()

    const handleInputChange=(event)=>{
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };
    
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        // var newArr = gifts
        // console.log(gifts)
        // newArr.push(formObject)
        // setGift(newArr)
        //     .then(res => loadBooks())
        //     .catch(err => console.log(err));
        
    };

    return(
        <form>
            <Input
                onChange={handleInputChange} 
                name="title"
                placeholder="Title"
            />
            <Input 
                onChange={handleInputChange}
                name="image"
                placeholder="Image"
            />
            <Input
                onChange={handleInputChange}
                name="link"
                placeholder="Link"
            />
            <FormBtn
                disabled={!(formObject.title && formObject.link)}
                onClick={handleFormSubmit}
              >
                  Add gift
              </FormBtn>
            
        </form>
    )
}

export default Gift;