import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideo } from '../services/allAPI';

function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
  //make api call http://localhost:4000/history
  const{caption,embedLink}=displayData
  let today=new Date()
  console.log(today);
  let timeStamp=(new Intl.DateTimeFormat('em-us',{year :'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today));
    let videoDetails={
      caption,embedLink,timeStamp
    }
    await addToHistory(videoDetails)
};

  //delet a video
  const removeVideo = async (id)=>{
    //make a api call
    await deleteVideo(id)
    setDeleteVideoStatus(true)
  }
const dragStarted = (e,id)=>{
  console.log("Drag Started.. Video Id:"+id);
  e.dataTransfer.setData("videoId",id)
}
  return (
    <>
      <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
        {insideCategory?"":<button className='btn' onClick={()=>removeVideo(displayData?.id)} ><i className="fa-solid fa-trash text-danger"></i></button>}
        </Card.Title>
       
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="480" src={`${displayData?.embedLink}?autoplay=1`} title="ONCE UPON A TIME IN KOCHI | Trailer | NadirShah | Raffi | Mubin | Devika Sanjay | Arjun | Shine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
      
      </Modal>
    </>
  )
}

export default VideoCard