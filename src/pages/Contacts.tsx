import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Contacts = () => {
    const contacts: any = useLoaderData();
    return (
            <div>
                <h1>Contacts</h1>
                {contacts.length > 0 ? 
                    contacts.map((contact: {contact_id: string; name: string} , idx: number)=>(
                        <div key={idx} >
                            <h4>{contact.name}</h4>
                            <p>{contact.contact_id}</p>
                        </div>
                    ))
                :
                        <div>
                            <h5>No Contacts</h5>
                        </div>
                } 
            </div>
           )
}

export default Contacts
