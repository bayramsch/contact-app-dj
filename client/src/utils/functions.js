//! Adding, retrieving, deleting and changing database information
import {useState,useEffect} from "react";
import Toastify from "./toast";

let updatteContacts; 

//! Adding Information
export const AddUser=(info)=>{
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/contact/", requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result)
        updatteContacts();
    })
    .catch(error => console.log('error', error));
}

//! Calling Information
export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [contactList,setContactList]=useState();

    const getContact = () =>{
        fetch("http://127.0.0.1:8000/api/contact/")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setContactList(data)
            setIsLoading(false)
        }).catch(err=>console.log(err))
    };
    updatteContacts = getContact;

    useEffect(() => {
        setIsLoading(true)
        getContact();
    },[])
    return {isLoading,contactList}
}

//! Deletion of information
export const DeleteUser=(id)=>{

    fetch("http://127.0.0.1:8000/api/contact/"+id+"/", {method:"DELETE"})
    .then((response)=>response.text())
    .then((data)=>{
        console.log(data);
        updatteContacts();
    }).catch(err=>console.log(err))
    Toastify("Kullanıcı bilgisi silindi")
}

//! Changing Information
export const EditUser=(info)=>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        ...info,
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/contact/"+info.id+"/", requestOptions)
    .then((response)=>response.text())
    .then((data)=>{
        console.log(data);
        updatteContacts();
    }).catch(err=>console.log(err))

}