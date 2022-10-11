
// import axios from 'axios'
// //import { Button } from 'bootstrap';
// import React, { Component } from 'react'
// import { Card, Col, Row } from 'react-bootstrap';
// import { Link, useHistory } from 'react-router-dom';

// export default class VenueDisplay extends Component {

    

    
//     constructor(props){
//         super(props);

//         this.state={
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

    
    
//     render() {
//         return (
//             <div style = {{align : 'center'}}>
//                 <h1 style={{fontWeight:'bold', color:"#0e7794", marginTop:'2rem'}}>Venues1</h1>
//                 <br/><br/>
//                 <Row xs = {10} md={2} lg={4} className ="g-4" style={{alignItems:'center'}}>
//                 {
//                     this.state.Venues.map(
//                         Venue => 
//                             <Col style={{width:'100%'}} key={Venue.id}>
//                                 <Link to={'/viewVenue/'+Venue.id} style={{textDecoration:'none', color:'black'}}>
//                                 <Card hoverable style={{width:'90%', flexDirection:'row', borderRadius:15, boxShadow:'1px 3px 1px #9E9E9E', marginBottom:10}} >
//                                     <Card.Img style = {{width : '16rem', height : '16rem', borderRadius:15, padding:2}} variant = "top" src ={`http://localhost:8090/images/${Venue.img}`} alt="venueimg"/>
//                                     <Card.Body style={{justifyContent:'flex-end'}}>
//                                         <Card.Title style={{fontWeight:'bolder', fontSize:40}}>{Venue.name}</Card.Title>
//                                         <Card.Text style={{opacity:0.6, fontSize:20}}>{Venue.type}</Card.Text>
//                                         <Card.Text style={{alignSelf:'end', fontWeight:'bolder', fontSize:30}}>Rs. {Venue.price}</Card.Text>
//                                     </Card.Body>
//                                 </Card>
//                                 </Link>
                                
//                             </Col>
                            
//                     )
                    
//                 }
//                 </Row>
                
//             </div>
//         )
//     }
// }


import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
export default class ViewFooditem extends Component {
    constructor(props) {
        super(props)
        this.passData = this.passData.bind(this);
        this.deleteFoodItemDetails = this.deleteFoodItemDetails.bind(this);
        this.state = {
            //id: this.props.match.params.id,
            FoodItem: []
        }
    }

    componentDidMount(){
        axios
      .get("http://localhost:8090/api/FoodItem/get")
      .then((response) => {
        this.setState({ FoodItem: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
        // ItemService.getItemsById(this.state.id).then( res => {
        //     this.setState({item: res.data});
        // })
    }

    passData(Food){
        axios.get("http:localhost:8090/api/FoodItem")
      }

    deleteFoodItemDetails(id) {
        axios
          .delete("http://localhost:8090/api/FoodItem/delete/" + id)
          .then((response) => {
            console.log(response.data);
          });
    
        this.setState({
            FoodItem: this.state.FoodItem.filter((el) => el.id !== id),
        });
      }
    render() {
        return (
            <div>
            <br></br>
            <h2 className="text-center" style={{color:"#0e7794"}}> Venue List</h2>
            <Link to="/addVenue"><Button variant="#053b4b" type="submit" style={{marginLeft:"160px" , width:"200px", height:"40px",backgroundColor:"#053b4b", color:"white"}}> 
                Add Venues
            </Button> </Link>
            
            <Link to="/card"><Button variant="#053b4b" type="submit" style={{ marginLeft:"460px",  width:"200px", height:"40px",backgroundColor:"#053b4b", color:"white"}}> 
            Customer View
        </Button> </Link>
            <br></br>
            <br></br><br></br>
            <div className = "row">
                   <table className = "table table-striped table-bordered" style={{ backgroundColor:"lightgrey" }}>

                       <thead>
                           <tr>
                               <th> Image</th>
                               <th> Venue Name</th>
                               <th> Price</th>
                               <th> Description</th>
                               <th> Category</th>
                               <th> Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.FoodItem.map(
                                   Food => 
                                   <tr key = {Food.id}>
                                        <td><img src={`http://localhost:8090/images/${Food.path}`} alt="" height="150" width="150"/></td> 
                                        <td> { Food.foodItemName} </td>   
                                        <td> {Food.price}</td>
                                        <td> {Food.description}</td>
                                        <td> {Food.category}</td>
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFoodItemDetails(Food.id)} className="btn btn-danger">Delete</button>
                                        <Link to={"/fupdate/" +Food.id}><button style={{marginLeft: "10px"}}  className="btn btn-info">Update</button></Link>
                                        </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>

            </div>
            </div>
        )
    }

}

// <button onClick={ () => this.editItem(FoodItem.id)} className="btn btn-info">Update </button>
// <button style={{marginLeft: "10px"}} onClick={ () => this.deleteItem(FoodItem.id)} className="btn btn-danger">Delete </button>
// <button style={{marginLeft: "10px"}} onClick={ () => this.viewItem(FoodItem.id)} className="btn btn-info">View </button>



// <div className = "row">
//                <button className="btn btn-primary" onClick={this.addItem}> Add Item</button>
//             </div>