import React from "react";

const Contacts = ({ contactProp }) => {
    const {id, name, phone, avatar, tag} = contactProp;
    return (
        <div className = "contactOuter">
            <img src={avatar} alt={name}/>
            <div className="contactInner">
                <h2>{name}</h2>
                <p>{phone}</p>
                <div
                    className={`tagClass ${
                        tag === "School" 
                        ? "tagSchool" 
                        : tag === "Personal"
                        ? "tagPersonal"
                        : "tagWork"
                    }`}
                > 
                    {tag}
                </div>
            </div>
        </div>
    )
};

export default Contacts;