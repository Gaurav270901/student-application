import React from 'react'
import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
    const msg = "Hii I am Gaurav"
  return (
    <ChildComponent message ={msg}/>
  )
}
export default ParentComponent ;
