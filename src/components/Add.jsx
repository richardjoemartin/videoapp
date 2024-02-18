import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import {uploadVideo} from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {
  const [video,setVideo]=useState({
    id:"",caption:"",url:"",embedLink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEmbedLink=(e)=>{
    const {value}=e.target
    if(value){
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }else{
      setVideo({...video,embedLink:""})

    }
  }
  console.log(video)
  const handleUpload= async()=>{
    //make api call
    const {id,caption,url,embedLink}=video
    if(!id || !caption || !url || !embedLink){
      toast.warning("please fill missing fields")
    }else{

      const response = await uploadVideo(video)
      // console.log(response);
      if(response.status >=200 && response.status<300){
        //set Server Response
        setUploadVideoServerResponse(response.data)
        toast.success(`${response.data.caption} video successfully uploaded`)
        //reset the /videos
        setVideo({
          id:"",caption:"url",embedLink:""
        })
        handleClose()
      }else{
        // console.log(response);
        toast.error('cannot perform the action right now')
      }
    }
  } 
  return (
    <>
    <div className='d-flex align-items-center'>
      <h5 className='text-center text-primary'>Upload Videos</h5>
      <button onClick={handleShow} className='btn '><i className="fa-solid fa-circle-plus fa-beat-fade fs-5 text-primary"></i></button>
      
    </div>
    <div className='d-flex align-items-center mt-4'>
    <h6>Scroll Down To See Uploaded Videos!! </h6>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Video Id" onChange={(e)=>setVideo({...video,id:e.target.value})} />
        
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Video Title" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
        
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail ">
        <Form.Control type="email" placeholder="Enter Video Image Url" onChange={(e)=>setVideo({...video,url:e.target.value})} />
        
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Video Link" onChange={getEmbedLink} />
        
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer 
      position='top-center'
      theme='colored'
      autoClose={2000} />
    </>
  )
}

export default Add


//<iframe width="853" height="480" src="https://www.youtube.com/embed/DJrLUv8rrY8" title="Why Night Owls Die Younger" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//ie , https://www.youtube.com/embed/DJrLUv8rrY8
//     https://www.youtube.com/watch?v=DJrLUv8rrY8   users konduvannidunna link ingane ayrikum

