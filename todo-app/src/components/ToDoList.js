import React from 'react'
import { useState } from 'react'

import ToDo from './ToDo'

export default function ToDoList( { title = '' , listJob = []}) {
  
  const genList = (list) => {
      return (
        <div>
          <h1> {title} </h1>
        <ul > {listJob.map((item, index) => <ToDo key={item.id} job = {item} />)} </ul> 
        </div>
      )
  }
  
  return (
    <div>
        { genList(listJob) }
    </div>
  );
}
