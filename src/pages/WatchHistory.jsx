import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'

function WatchHistory() {
  const [history,setHistory]=useState([])
  const handleHistory = async ()=>{
    //make api call
    const {data} =await getAllHistory()
    // console.log(data);
    setHistory(data)
  }
  useEffect(()=>{
    handleHistory()
  },[])

  const handleDeleteHistory =async(id)=>{
       //make api call
       await deleteHistory(id)
       //get remaining history
       handleHistory()
  }
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px'}}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link>
    </div>
    <table className='table mt-5 mb-5 container table-dark'>
      <thead>
        <tr>
        <th>#</th>
        <th>Caption</th>
        <th>URL</th>
        <th>Timestrap</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {
            history.length>0?history?.map((item,index)=>(
              <tr key={index} >
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td>{item?.embedLink}</td>
              <td>{item?.timeStamp}</td>
              <td><button className='btn' onClick={()=>handleDeleteHistory(item?.id)} ><i className='fa-solid fa-trash text-danger'></i></button></td>
            </tr>
            )):<p className='fs-5 fw-5 text-danger'>Nothing to Display</p>
            
          }
        </tbody>
    </table>
    </>
  )
}

export default WatchHistory