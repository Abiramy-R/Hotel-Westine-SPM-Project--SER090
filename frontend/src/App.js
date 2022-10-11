import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//praveen

import AddVenue from "./Tharmithan/AddVenue";
import ViewVenues from "./Tharmithan/ViewVenues";
import UpdateVenue from "./Tharmithan/UpdateVenue";


//Jathusanan
import AddRoom from "./Abiramy/AddRoom";
import ViewRoom from "./Abiramy/ViewRoom";
import UpdateRoom from "./Abiramy/UpdateRoom";
import AdminHeader from "./Abiramy/AdminHeader";
import ViewStatus from "./Abiramy/ViewStatus";
import UserHeader from "./Abiramy/UserHeader";

//Shanghavi
import EmployeeList from './Ishalini/EmployeeList';
import CreateEmployee from './Ishalini/CreateEmployee';
import UpdateEmployee from './Ishalini/UpdateEmployee';
import ViewEmployee from './Ishalini/ViewEmployee';
import ViewExpense from './Ishalini/ViewExpense';
import AddExpense from './Ishalini/AddExpense';
import UpdateExpense from "./Ishalini/UpdateExpense";
import Reviewexpense from "./Ishalini/Expensereport";

// import Login from "./Shanghavi/Login/login.component";
// import Register from "./Shanghavi/Login/register.component";
// import Profile from "./Shanghavi/Login/profile.component";

//Vithursan


import ViewFooditem from "./Nirushan/ViewFooditem";
import FoodCard from './Nirushan/FoodCard';
import AdminDash from './Nirushan/AdminDash';
import UpdateFood from './Nirushan/UpdateFood';
import Home from './Nirushan/Home';
import AddFoodItem from './Nirushan/AddFoodItem';
import VenueDisplay from "./Tharmithan/VenueDisplay";
import VenueBooking from "./Tharmithan/VenueBooking";
import FinalizeReservation from "./Tharmithan/FinalizeReservation";
import OrderForm from "./Nirushan/OrderForm";
import ViewOrder from "./Nirushan/ViewOrder";
import StripeButton from "./Nirushan/stripebutton.component";
import PrintThisComponent from "./Nirushan/Print";
import Login from "./Nirushan/Login";
import SearchResult from "./Ishalini/Search";


function App() {
  return (
    <div className="App">
      <Router>

{
  sessionStorage.getItem('name')=="Admin" ?(
    <AdminHeader /> 
    

    
  ):(
    <UserHeader /> 
  )
}
        
     
        
        <div className="container">
          <Switch>
            <Route path="/visual" exact={true} component={ViewRoom} />
            <Route path="/status" exact={true} component={ViewStatus} />
            <Route path="/update/:id" exact={true} component={UpdateRoom} />
            <Route path="/AddRoom" exact={true} component={AddRoom} />

         
            <Route path="/" exact={true} component={Home} />
            <Route path='/Fdash' exact={true} component={AdminDash}/>
            <Route path='/add' exact={true} component={AddFoodItem}/>
            <Route path='/view' exact={true} component={ViewFooditem}/>
            <Route path='/card' exact={true} component={FoodCard}/>
            <Route path='/fupdate/:id' exact={true} component={UpdateFood}/>
            <Route path='/order/:id' exact={true} component={OrderForm}/>
            <Route path='/vieworder' exact={true} component={ViewOrder}/>
            <Route path = "/Stripebutton" exact component = {StripeButton}/>

            <Route path='/login' exact={true} component={Login}/>


    
  
            <Route path = "/getemployees" component = {EmployeeList}/>
            <Route path = "/addemployee/:id" component = {CreateEmployee}/>
            <Route path = "/updateemployee/:id" component = {UpdateEmployee}/>
            <Route path = "/viewemployee/:id" component = {ViewEmployee}/>
            <Route path='/viewexpense'  component={ViewExpense}/>
            <Route path='/addexpense/:id'  component={AddExpense}/>
            <Route path = "/updateexpense/:id" component = {UpdateExpense}/>
            <Route path='/reviewexpense'  component={Reviewexpense}/>
            <Route path = '/search' component = {SearchResult}/>
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
          */}



           
            <Route path='/addVenue' component={AddVenue}/>
            <Route path='/venues' component={ViewVenues}/>
            <Route path='/updateVenue/:id' component={UpdateVenue}/>
            <Route path='/viewVenues' component={VenueDisplay}/>
            <Route path='/viewVenue/:id' component={VenueBooking}/>
            <Route path='/finalizeHall/:id' component={FinalizeReservation}/>
           

            <Route path="/addVenue" component={AddVenue} />
            <Route path="/venues" component={ViewVenues} />
            <Route path="/updateVenue/:id" component={UpdateVenue} />
            {/* <Route path ="/searchVenue" component={VenueSearch}/> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
