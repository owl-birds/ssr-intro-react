const contacts = [
    {
        contact_id: "1",
        name: "John"
    },
    {
        contact_id: "2",
        name: "Susan"
    }
]

export const get_contacts = ()=>{
    return contacts;
}

export const contact_loader = (contact_id: string)=>{
    const find_contact = contacts.filter((contact)=>contact.contact_id === contact_id);   
    return find_contact.length !== 0 ? find_contact[0] : null;
}
