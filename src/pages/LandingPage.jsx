import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'> 
        <Col></Col>
        <Col lg={5}>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique quod ipsam voluptatem dignissimos quibusdam animi id porro quae odio accusantium alias fugiat vero asperiores, facilis voluptate at totam aperiam!</p>
            <button onClick={()=>navigateByUrl('/Home')} className='mt-4 btn btn-info'>Get Started</button>
        </Col>
        <Col lg={5}>
            <img className='img-fluid'  src="https://media0.giphy.com/media/26tn7BL2UDTMVWovu/giphy-downsized.gif" alt="no image" />
        </Col>
        <Col></Col>
      </Row>
      <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column ">
      <h3>Features</h3>
      <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100 ">
      <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/a6/81/30/a68130179ec9bebd0fe70bf7542d6ef8.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
     
      <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.gifer.com/7s3p.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>

      <div className="container b-5 border rounded border-secondary p-5 mt-5 d-flex align-items-center justify-content-between w-100">
        <div className="content col-lg-5">
            <h3 className='mb-5 text-warning'>Simple,Powerful & Fast</h3>
            <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi enim ut tempore possimus natus qui voluptatibus fugit quis numquam soluta ratione id a quos reiciendis, reprehenderit et vero doloribus.</h6>
            <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Categorize Videos </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi enim ut tempore possimus natus qui voluptatibus fugit quis numquam soluta ratione id a quos reiciendis, reprehenderit et vero doloribus.</h6>
            <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi enim ut tempore possimus natus qui voluptatibus fugit quis numquam soluta ratione id a quos reiciendis, reprehenderit et vero doloribus.</h6>
        </div>
        <div className="video col-lg-5">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/WbkLaeNthhk?si=ATeXuhMquYqPksow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      </div>
    </>
  )
}

export default LandingPage