import { useState } from "react"
//import AllContacts from "./AllContacts"
import { Link } from "react-router-dom";

// import './App.css'

function AddContact(){

    const [name, setName] = useState('')
    const [Mobileno, setMobileno] = useState('')

    const addContact = () =>{
        const user = {
            'name' : name,
            'mobile': Mobileno
        }

        if(localStorage.getItem('allContacts'))
        {
            var allContacts = JSON.parse(localStorage.getItem('allContacts'));
            allContacts.push(user)
            localStorage.setItem('allContacts', JSON.stringify(allContacts))
        }
        else{
            var allContacts = []
            allContacts.push(user)
            localStorage.setItem('allContacts', JSON.stringify(allContacts))
        }
        alert("Added")
        window.location.reload()
    }
     
    
    return(
        <>
         <Link to="/" className="abc">Show All Contacts</Link>


        <table>
            <tr>
                <th style={{color:'blue'}}>Contact List</th>
            </tr>
            <tr>
                <td>Enter Name</td>
                <td><input type="text" name="" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Enter Mobile no</td>
                <td><input type="number" name="" placeholder="Enter Mobile no" onChange={(e) => setMobileno(e.target.value)}/></td>
            </tr>
            <tr>
                <td><input onClick={addContact} type="Submit" value="Add"/></td>
            </tr>
            {name} <br></br>
            {Mobileno}
    
        </table>

    
        </>
    )
}

export default AddContact