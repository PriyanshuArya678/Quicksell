import { useEffect, useState } from 'react'
import './app.css'
import React from 'react'
import Card from './Card/Card'
import axios from 'axios'
import { useDispatch ,useSelector } from 'react-redux'
import { addData } from '../store/DataSlice'
import KanbanBoard from './KanbanBoard'
export default function Body() {
  const dispatch =useDispatch()
  const [loading , setLoading]=useState(true)
  const [table,setTable]=useState({})
  useEffect(()=>{
    const getData=async()=>{
      const res=await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      const tickets=res.data.tickets
      const users=res.data.users
      const mp={}
      users.forEach((user)=>{mp[user.id]=user})
      const data=tickets.map((ticket)=>{
        if(ticket.userId in mp){
          return {
            ...ticket,name:mp[ticket.userId].name,available:mp[ticket.userId].available
          }
        }
      })
      dispatch(addData(data))
      setLoading(false)
    }
    getData()
  },[])

  return loading ?  (
    <div id='body'>
      <iframe id='loading' src="https://lottie.host/embed/6b0d3ef9-6368-49d3-a491-40e61014fecf/tx2J8i1zDw.json" frameborder="0"></iframe>
    </div>
  ):
  (
    <KanbanBoard/>
  )
}
