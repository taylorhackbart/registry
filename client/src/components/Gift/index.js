import React, {useState} from "react";
import API from "../../utils/API"
import {Input,TextArea,FormBtn} from "../Form"

const Gift = (props)=>{
    const [gifts, setGift] = useState([])
    const [formObject, setFormObject] = useState({})

    const handleInputChange=(event)=>{
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };
    
    const handleFormSubmit=(event)=>{
        event.preventDefault();
          API.saveBook({
            title: formObject.title,
            image: formObject.image,
            link: formObject.link
          })
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