//import { useState } from "react"
import { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';


import './App.css'

function AllContacts(){
    const navigate = useNavigate(); 

 
    const [contacts, setContacts] = useState([])

    useEffect(()=>{
        if(localStorage.getItem('allContacts'))
        {
            var allContacts = JSON.parse(localStorage.getItem('allContacts'));
            setContacts(allContacts)
        }
    }, [])
    
    
    const Editcontact = (Mobileno) =>{
        navigate('/editcontact', {state: {"mobile":Mobileno}});

    }

    const Deletecontact = (Mobileno) =>{
       
        if(window.confirm("Are you sure to delete")){
            var temp= [];
            var allContacts= JSON.parse(localStorage.getItem('allContacts'));
            for(let i=0;i<allContacts.length;i++){
                if(allContacts[i].mobile!=Mobileno){
                    temp.push(allContacts[i])
                }
            }
            localStorage.setItem('allContacts', JSON.stringify(temp));
            alert("Update Sucessful")
            window.location.reload()
        }
    }

    
    return(
        <>
        <Link to="/Addcontact" className="bcd">Add New Contact</Link>


        <table>
        <tr>
                <th style={{color:'blue'}}>All Contact List</th>
            </tr>
            <tr>
                <td>S.no</td>
                <td>Name</td>
                <td>Contact no</td>
                <td>Action</td>
            </tr>
            {
                    contacts.map((data, index) => 
                        <tr>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.mobile}</td>
                            <td>
                            <button style={{margin:'7px'}} onClick={(e) => Editcontact(data.mobile)}>Edit</button>
                            <button style={{margin:'7px'}} onClick={(e) => Deletecontact(data.mobile)}>Delete</button>
                            </td>
                        </tr>
                    )
            }
        
    
        </table>

        </>
    )
}

export default AllContacts