import React from 'react'
import '../styles/SidebarOption.css'


// the  'Icon' props is passed in as a component, that's why it's in capital letter
const SidebarOption = ({active, text, Icon}) => {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`} >
        {Icon}
        <h2>{text}</h2>
      
    </div>
  )
}

export default SidebarOption
