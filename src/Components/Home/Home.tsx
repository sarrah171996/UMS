import React from 'react'
import homeImg from '../../assets/6995556.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pc from '../../assets/pc.png'
import paint from '../../assets/paint-brush.png'
import phone from '../../assets/smartphone.png'
import notification from '../../assets/notification.png'
import dev from '../../assets/development.png'
import settings from '../../assets/settings.png'

export default function Home() {
  return (
    <>
      <div className="container  ">
        <div className="row d-flex align-items-center vh-100 ">
          <div className="col-md-6 left-side text-center">
<h2>welcome to your <span className='text-warning'>Dashboard</span></h2>
<h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, suscipit.</h5>
          </div>

          <div className="col-md-6 right-side">
<img src={homeImg} className='w-100 shadow-lg ' alt="" />
          </div>
        </div>
        
      </div>

<div className="d-flex justify-content-center my-5">

      <div className="content col-md-5 text-center">
        <h5 className='text-warning'>welcome</h5>
        <h3>we help you to control your data</h3>
        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  doloribus ab illum eum neque.</small>
      </div>
</div>


<div className="containr cards d-flex ">
  <div className="row">


  <div className="col-md-4  ">

<Card   style={
  {
     width: '18rem',
     textAlign:'center',
     color:' rgba(43, 43, 35, 0.98)',
     background: 'rgb(219,188,68)',
background:' linear-gradient(0deg, rgba(219,188,68,0.8155637254901961) 0%, rgba(253,187,45,1) 100%)',
padding :'20px'
     
     
     }}>
      <Card.Body >
      {/* <i className="fa-solid fa-laptop-code my-3"></i> */}
      <img src={pc} className='w-50 mb-3' alt="" />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="bg-transparent " style={{border :'solid 1px ' , color:'rgba(43, 43, 35, 0.98)',}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>


  <div className="col-md-4 ">

<Card   style={
  {
     width: '18rem',
     textAlign:'center',
     color:' rgba(43, 43, 35, 0.98)',
     background: 'rgb(52,38,98)',
background:' linear-gradient(0deg, rgba(55, 43, 95, 0.82) 0%, rgb(131, 75, 153) 19%)',
padding :'20px'
     
     
     }}>
      <Card.Body >
      <img src={paint} className='w-50 mb-3' alt="" />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="bg-transparent " style={{border :'solid 1px ' , color:'rgba(43, 43, 35, 0.98)',}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>


  <div className="col-md-4  ">

<Card   style={
  {
     width: '18rem',
     textAlign:'center',
     color:' rgba(43, 43, 35, 0.98)',
     background: 'rgb(98,38,44)',
background:' linear-gradient(0deg, rgba(98,38,44,0.8155637254901961) 0%, rgba(148,68,87,1) 26%)',
padding :'20px'
     
     
     }}>
      <Card.Body >
      <img src={phone} className='w-50 mb-3' alt="" />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="bg-transparent " style={{border :'solid 1px ' , color:'rgba(43, 43, 35, 0.98)',}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>

  </div>


</div>


<div className="containr cards d-flex ">
<div className="row my-4">

<div className="col-md-4  ">

<Card   style={
  {
     width: '18rem',
     textAlign:'center',
     color:' rgba(43, 43, 35, 0.98)',
     background: 'rgb(53,98,158)',
background:' linear-gradient(0deg, rgba(53,98,158,1) 9%, rgba(39,116,192,1) 26%)',
padding :'20px'
     
     
     }}>
      <Card.Body >
      <img src={notification} className='w-50 mb-3' alt="" />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="bg-transparent " style={{border :'solid 1px ' , color:'rgba(43, 43, 35, 0.98)',}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>


  <div className="col-md-4 ">

<Card   style={
  {
     width: '18rem',
     textAlign:'center',
     color:' rgba(43, 43, 35, 0.98)',
     background: 'rgb(150,53,158)',
background:' linear-gradient(118deg, rgba(150,53,158,1) 6%, rgba(152,99,157,1) 27%)',
padding :'20px'
     
     
     }}>
      <Card.Body >
      <img src={dev} className='w-50 mb-3' alt="" />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="bg-transparent " style={{border :'solid 1px ' , color:'rgba(43, 43, 35, 0.98)',}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>


  <div className="col-md-4 ">

<Card   style={
  {
     width: '18rem',
     textAlign:'center',
     color:' rgba(43, 43, 35, 0.98)',
     background: 'rgb(190,96,14)',
background:' linear-gradient(45deg, rgba(190,96,14,1) 24%, rgba(200,164,121,1) 63%)',
padding :'20px'
     
     
     }}>
      <Card.Body >
      <img src={settings} className='w-50 mb-3' alt="" />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="bg-transparent " style={{border :'solid 1px ' , color:'rgba(43, 43, 35, 0.98)',}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>


</div>
</div>


    </>
  )
}
