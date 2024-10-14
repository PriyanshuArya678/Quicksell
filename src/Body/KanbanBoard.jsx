import React, { useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { useMemo } from 'react'
import SVGUrgentPrioritycolour from '../assets/SVGUrgentPrioritycolour'
import Nopriority from '../assets/Nopriority'
import ImgHighPriority from '../assets/ImgHighPriority'
import ImgMediumPriority from '../assets/ImgMediumPriority'
import ImgLowPriority from '../assets/ImgLowPriority'
import Backlog from '../assets/Backlog'
import Cancelled from '../assets/Cancelled'
import Done from '../assets/Done'
import Todo from '../assets/Todo'
import Inprogress from '../assets/Inprogress'
import Add from '../assets/Add'
import Header from './Header'
import Card from './Card/Card'
import Image from './Image'
function KanbanBoard() {
    
  const group =useSelector(state=>state.currState.group)
  const order =useSelector(state=>state.currState.order)
  var res=useSelector(state=>state.data.data)
  const groupTable={
    Status:'status',
    Priority:'priority',
    User:'name'
  }
  const priorityLabels = {
    'Urgent': SVGUrgentPrioritycolour,
    'High': ImgHighPriority,
    'Medium':ImgMediumPriority,
    'Low': ImgLowPriority,
    'No priority':Nopriority
  };
  const priorityName={
    4:'Urgent',
    3:'High',
    2:'Medium',
    1:'Low',
    0:'No priority'
  }
  const statusLabels ={
    'Backlog': Backlog,
    'Todo': Todo,
    'In progress':Inprogress,
    'Done':Done,
    'Cancelled':Cancelled
  }
  const userLabels={

  }
  const groupToLabel={
    'Status':statusLabels,
    'Priority':priorityLabels,
    'User':userLabels
  }
  const sortByFunctions = {
    Priority: (a, b) => b.priority - a.priority,
    Title: (a, b) => a.title.localeCompare(b.title), 
  };
  const table=useMemo(()=>{
    const temp={}
    const parameter=groupTable[group]
    res.forEach((item,key)=>{
        var v=item[parameter]
        if(group==='Priority')v=priorityName[v]
        if(!temp[v]){
            temp[v]=[]
            if(group=='User'){
                userLabels[v]=Image
            }
        }
        temp[v].push(item)
    })
    Object.values(temp).forEach(key=>{
        key.sort(sortByFunctions[order])
    })
    return temp
  },[group,order])
  return (
    <div id='kanban-board'>
        {
            Object.entries(groupToLabel[group]).map(([key,value])=>{
                const temp=table[key]||[]
                return <div id='component'>
                    <Header 
                        Icon={value} 
                        heading={key} 
                        count={temp.length}
                    />
                    <div className='list'>
                        {
                            temp.map((item,key)=>{
                                return <Card 
                                        id={item.id} 
                                        StatusIcon={statusLabels[item.status]}
                                        PriorityIcon={priorityLabels[priorityName[item.priority]]}
                                        NameIcon={Add}
                                        title={item.title}
                                        group={group}
                                    />
                            })
                        }
                    </div>

                </div>
            })
        }
    </div>
  )
}

export default KanbanBoard
