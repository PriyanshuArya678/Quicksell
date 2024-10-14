import { useEffect, useState } from 'react'
import './app.css'
import React from 'react'
import { changeGroup,changeOrder } from '../store/CurrStatusSlice';
import { useDispatch,useSelector } from 'react-redux';
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import DisplayIcon from '../assets/DisplayIcon';
import Down from '../assets/down';
function Display() {
    const dispatch=useDispatch()
    const [group,setGroup]=useState(()=>sessionStorage.getItem('group') || 'Status')
    const [order,setOrder]=useState(()=>sessionStorage.getItem('order') || 'Title')
    const [openDropDown,setopenDropDown]=useState(false)
    var dropdown=()=>{
        setopenDropDown(prev=>!prev)
    }
    var Groupchange=(e)=>{
        sessionStorage.setItem('group',e.target.value)
        dispatch(changeGroup(e.target.value))
        setGroup(e.target.value)
    }
    var Orderchange=(e)=>{
        sessionStorage.setItem('order',e.target.value)
        dispatch(changeOrder(e.target.value))
        setOrder(e.target.value)
    }
    useEffect(()=>{
        sessionStorage.setItem('group',group)
        sessionStorage.setItem('order',order)
        dispatch(changeGroup(group))
        dispatch(changeOrder(order))
    },[])
  return (
    <div id='display-block'>
        <div id='outer-block'>
        <span id='inner-block'>
            <DisplayIcon/>
            <div id='display'>
                Display
            </div>
            < div id='' onClick={dropdown}>
                <Down/>
            </div>
        </span>
        {
            openDropDown&&(
                <div id='drop-down'>
                    <div class='innerdrop-down'>
                        <span >Grouping</span>
                        <select onChange={Groupchange} name="grouping" value={group} >
                            <option value="Status">Status</option>
                            <option value="Priority">Priority</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div class='innerdrop-down'>
                        <span>Orderering</span>
                        <select onChange={Orderchange} name="ordering" value={order}>
                            <option value="Priority">Priority</option>
                            <option value="Title">Title</option>
                        </select>
                    </div>
                </div>
            )
        }
        </div>
    </div>

  )
}

export default Display
