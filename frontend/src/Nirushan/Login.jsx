import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeFoodItemName = this.onChangeFoodItemName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangePath = this.onChangePath.bind(this);
        this.onChangepass = this.onChangepass.bind(this);
    
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
           // id:this.props.match.params.id,
            foodItemName:"",
            price:"",
            description:"",
            category:"",
            path:"",
            pass:""
        };
      }
    
      onChangeFoodItemName(e) {
        this.setState({
            foodItemName: e.target.value,
        });
      }
      onChangepass(e) {
        this.setState({
            pass: e.target.value,
        });
      }
      onChangePrice(e) {
        this.setState({
          price: e.target.value,
        });
      }
    
      onChangeDescription(e) {
        this.setState({
          description: e.target.value,
        });
      }
    
      onChangeCategory(e) {
      
        this.setState({
          category: e.target.value,
          
        });
      }

      onChangePath(e) {
        this.setState({
          path: e.target.files[0],
        });
      }

      onSubmit(e) {
        e.preventDefault();
        console.log( "goooo");
        // const FoodItemDetails = {
        //   foodItemName: this.state.foodItemName,
        //   price: this.state.price,
        //   description: this.state.description,
        //   category: this.state.category,
        //   path: this.state.path,
        // };
    
        //console.log(FoodItemDetails);
        const formdata =new FormData();
       
        formdata.append("category", this.state.category);
        
        console.log( "goooo");

        
        sessionStorage.setItem("name",this.state.category);
       
    
        this.setState({
            // foodItemName:"",
            // price:"",
            // description:"",
            category:"",
            //path:""
        });
    
        alert(" successfully");
        window.location.href ="/";
<Redirect to="/"/>;
        return( <Redirect to="/"/>)
       
      }

    render() {
        return (
            <div>
            <br></br>
            <br></br>
            <h3 className="text-center" style={{color:"#0e7794"}}>Add Food Item Details</h3>


<div className = "card col-md-6 offset-md-3 offset-md-3">
<div className="container">
            <Form onSubmit={this.onSubmit} >

            <Form.Group  controlId="formGroupEmail">
            <Form.Label >USER NAME</Form.Label>
              <Form.Control 
                  type="text" 
                  required={true} 
                  pattern="\w+.{5,}.[/\D/g]" 
                  title="user name should not contain numbers or symbols and must be largerthan 5 characters." 
                  placeholder="User Name"  
                  onChange={this.onChangeFoodItemName}  
                  value={this.state.foodItemName} 
              />
            </Form.Group>

            <Form.Group  controlId="formGroupEmail">
            <Form.Label >PASSWORD</Form.Label>
              <Form.Control 
                  type="text" 
                  required={true} 
                  pattern="\w+.{5,}.[/\D/g]" 
                  title="password should not contain numbers or symbols and must be largerthan 5 characters." 
                  placeholder="Password"  
                  onChange={this.onChangepass}  
                  value={this.state.pass} 
              />
            </Form.Group>

             

            

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>User Type</Form.Label>
            <Form.Select     required={true}   onChange={this.onChangeCategory}  value={this.state.category}>
            <option>Select</option>
              <option>Admin</option>
              <option>User</option>
            </Form.Select>
          </Form.Group>

          

         
        <br></br>

        <Button variant="#053b4b" type="submit" style={{marginLeft:"160px" , width:"200px", height:"40px",backgroundColor:"#053b4b", color:"white"}}> 
   Login
        </Button> 
        <br></br>

        </Form>
        </div>
       
        </div>
        <br></br>
            </div>
        )
    }
}
