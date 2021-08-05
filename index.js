//USE CONTEXT
import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react'
import {data} from './data'
import './index.css'

const UseContext = () => {
const [people, setPeople] = useState(data)

const removePerson = (id) => {
    setPeople((person)=>{
        return(
            person.filter((e)=> e.id !== id)
        )
    })
 }

    return(
        <>
         <List remove={removePerson} people={people}/>
        </>
    )
}

const List = ({people, remove}) => {
    return(
        <>
        {people.map((person) => {
            return(
                <div>
                 <Individual removePer={remove} key={person.id} {...person}/>
                </div>)
            })
           }
      </>)
}

const Individual = ({id, name, removePer}) => {
  return(
      <div>
       <h1>{name}</h1>
       <button type="button" onClick={()=> removePer(id)}>Remove</button>
      </div>)
}

ReactDOM.render(<UseContext />, document.getElementById('root'))
