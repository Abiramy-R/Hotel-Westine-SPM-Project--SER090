// import axios from 'axios'
// //import { Button } from 'bootstrap';
// import React, { Component } from 'react'
// import { Card, Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// export default class ViewVenues extends Component {

//     constructor(props){
//         super(props)

//         // this.deleteVenue = this.deleteVenue.bind(this);

//         this.state = {
//             Venues:[]
//         }
//     }

//     componentDidMount(){
//         axios
//             .get("http://localhost:8090/api/venue/venues")
//             .then((res) => {
//                 this.setState({Venues:res.data});
//             })
//             .catch((err) =>{
//                 console.log(err);
//             });
//     }

//     // getImages(id){
//     //     axios
//     //         .get("http://localhost:8080/api/venue/Images/" + id)
//     //         .then((res)=>{
//     //             console.log(res)
//     //         });
            
//     // }

//     deleteVenue(id){
//         console.log("Deleting Id: ", id)
//         axios
//             .delete("http://localhost:8090/api/venue/deleteVenue/" + id)
//             .then((res) =>{
//                 console.log(res)
//             })
//             // this.setState({
//             //     Venue: this.state.Venue.filter((el) => el.id !== id),
//             // });
//     }

//     render() {
//         return (
//             <div style = {{align : 'center'}}>
//                 <h1 style={{fontWeight:'bold', color:"#0e7794", marginTop:'2rem'}}>Venues</h1>
//                 <br/><br/>
//                 <Row xs = {10} md={2} lg={4} className ="g-4">
//                 {
//                     this.state.Venues.map(
//                         Venue => 
//                             <Col key={Venue.id}>
//                                 <Card style = {{ width: '18rem', height:'35rem',padding : "1rem", borderRadius: 15}}>
//                                     <Card.Img style = {{width : '16rem', height : '16rem'}} variant = "top" src ={`http://localhost:8090/images/${Venue.img}`} alt="venueimg"/>
//                                     <Card.Body>
//                                         <Card.Title style={{fontWeight:'bold', fontSize:'30px'}}>{Venue.name}</Card.Title>
//                                         <Card.Text>{Venue.type}</Card.Text>
//                                         <Card.Text>Rs. {Venue.price}</Card.Text>
//                                         <Card.Text>
//                                             <Link to ={"/updateVenue/"+Venue.id}><img style =  {{height: '3rem', width:'3rem', marginTop:'2rem'}} src = "https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png" alt="editIcon"/></Link>
//                                             <a href = "/venues" onClick={() => {this.deleteVenue(Venue.id)}}><img style ={{height : '3rem', width:'3rem', marginLeft:"1rem", marginTop:'2rem'}} src="https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-HD-Image.png" alt = "deleteIcon"/></a>
                                            
//                                         </Card.Text>
//                                     </Card.Body>
//                                 </Card>
                                
//                             </Col>
                            
//                     )
                    
//                 }
//                 <Link to = "/addVenue" style={{textDecoration :'none', color:'black'}}>
//                 <Card style = {{ width: '18rem', height:'35rem', padding:"1rem", borderRadius: 15}}>
//                                     <Card.Img src = "https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-28.jpg" style = {{width : '16rem', height : '16rem'}} alt = "addIcon"/>
//                                     <Card.Title style={{fontWeight:'bold', fontSize:'30px', alignSelf:'center'}}>Add Venue</Card.Title>
//                 </Card>
//                 </Link>
//                 </Row>
                
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Viewi from '../Vithursan/Images/view.jpg'
import Cardi from '../Vithursan/Images/card.jpg'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import orderI from '../Vithursan/Images/exp.jpg'
import AddII from '../Praveen/images/add-event1.jpg'
export default class AdminDash extends Component {
    render() {
        return (
            <div className="d-grid gap-2">
            <br/><br/><br/>
            <h1 className="text-center" style={{color:"#0e7794"}}>Event Management Dashboard</h1>
            <br/><br/><br/>
            <Row xs={1} md={2} className="g-4">
            <Col>
           
            <Card style={{ width: '20rem' }} className="text-center">
            <Link to ="/add">
            <Card.Img variant="top" src={AddII} />
            </Link>
            <Card.Body>
              <Card.Title>Add Events</Card.Title>
              <Card.Text>
               
              </Card.Text>
              <Link to="/addVenue"><Button size="lg" block variant="#053b4b"  style={{backgroundColor:"#053b4b", color:"white"}}>click</Button> </Link>
            </Card.Body>
          </Card>
         
          </Col>
          <Col>
          <Card style={{ width: '18rem' }} className="text-center">
          <Link to ="/view">
          <Card.Img variant="top" src={Viewi} />
          </Link>
          <Card.Body>
            <Card.Title>View Event</Card.Title>
            <Card.Text>
             
            </Card.Text>
            <Link to="/view"><Button size="lg" block variant="#053b4b"  style={{backgroundColor:"#053b4b", color:"white"}}>click</Button></Link>
          </Card.Body>
        </Card>
        </Col>
       
        <Col>
        <Card style={{ width: '18rem' }} className="text-center">
        <Link to ="/card">
          <Card.Img variant="top" src={Cardi} />
</Link>
          <Card.Body>
            <Card.Title>Customer view </Card.Title>
            <Card.Text>
             
            </Card.Text>
            <Link to="/card"><Button variant="#053b4b" size="lg" block   style={{backgroundColor:"#053b4b", color:"white"}}>click</Button></Link>
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }} className="text-center">
        <Link to ="/vieworder">
          <Card.Img variant="top" src={orderI} />
</Link>
          <Card.Body>
            <Card.Title>Booked Details </Card.Title>
            <Card.Text>
             
            </Card.Text>
            <Link to="/vieworder"><Button variant="#053b4b" size="lg" block   style={{backgroundColor:"#053b4b", color:"white"}}>click</Button></Link>
          </Card.Body>
        </Card>
       
        </Col>
        </Row>
            </div>
        )
    }
}
