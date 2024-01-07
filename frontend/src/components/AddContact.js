import React, { useState } from 'react'

function AddContact() {
    const [name , setName] = useState("");
    const [phone, setPhone] = useState("");
    const [avatar, setAvatar] = useState("");
    const [newTag, setNewTag] = useState("");
    const handleSubmit = () => {
        if(name === "")
            alert("enter name")
        else{

            
        const contactBody = {
            name:name,
            phone:phone,
            avatar: avatar,
            tag:newTag
        };
        fetch("http://localhost:3005/contact",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(contactBody)
        })
        .then((res) => res.json())
        .then((res)=>{
            console.log(res);
            alert("contact added");
            setName("");
            setAvatar("");
            setNewTag("");
            setPhone("");
        })
        .catch((error)=>{
            console.log(error);
        })}
    };



  return (
    <div className="addContactContainer">
      <div className="addContactHeader">
        <h1>Add Contact</h1>
      </div>
      <div className="addContactOuter">
        <div className="inputDiv">
            <input 
                type="text"
                placeholder='Enter Name'
                value={name}
                onChange={(event) => {
                    setName(event.target.value)
                }}

            >

            </input>
        </div>
        <div className="inputDiv">
          <input
            placeholder="Phone Number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="inputDiv">
          <input
            placeholder="Avatar"
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <div className="tagDiv">
          <div>
            <input
              type="radio"
              name="addTag"
              onChange={() => setNewTag("Personal")}
              checked={newTag === "Personal"}
            />
            <span className="tagClass tagPersonal">{"Personal"}</span>
          </div>
          <div>
            <input
              class="cursor-pointer mr-2"
              type="radio"
              name="addTag"
              onChange={() => setNewTag("Work")}
              checked={newTag === "Work"}
            />
            <span className="tagClass tagWork">{"Work"}</span>
          </div>
          <div>
            <input
              class="cursor-pointer mr-2"
              type="radio"
              name="addTag"
              onChange={() => setNewTag("School")}
              checked={newTag === "School"}
            />
            <span className="tagClass tagSchool">{"School"}</span>
          </div>
        </div>
        <div className="addContactButtonDiv">
          <button className="addContactButton" onClick= {handleSubmit} >
            Add Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddContact