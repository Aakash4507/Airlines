import React, { Component } from 'react';
import BookingService from '../services/BookingService';
import Header from './Header';
import Footer from './Footer';
import planeBG from "../assets/images/pl.jpg";

class viewPassenger extends Component {
    state ={multiple_passenger:[]}
    constructor(props){
        super(props)
        this.service = new BookingService();
        
        this.passenger = []
        if(!localStorage.getItem('user'))
        {
            this.props.history.push('/login')
        }
        else{
            this.service.getPassenger().then(response => {
                console.log("passenger page : " +response)
                this.passenger = (response.data)
                console.log("passengers: "+ this.passenger)
            });
        }
        
    }

    getPassenger = () => {
        this.service.getPassenger().then(data => {
            console.log(data);
            this.setState({passenger : data})
        })
    }

    componentDidMount(){
        this.getPassenger();
    }

    render(){
        if(!this.passenger){return null
        }

        const passengerList = this.passenger.map((x)=>
                <tr key={x.pid}>
                    <td>{x.pid}</td>
                    <td>{x.pname}</td>
                    <td>{x.gender}</td>
                    <td>{x.age}</td>
               
                </tr>
        )

        return (
            <div class='pt-5'>
            <Header />  
            
        <div class='pt-5' style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '1000px'}}>
        
            <div class="row mb-4">
                <div class="col-lg-12 mx-auto text-center">
                <h1 class="font-weight-bold" style={{color:'black', fontWeight:'80pt'}}>Passenger List</h1>
                </div>
            </div> 

			<div class="row">
				<div class="col-md-8 mx-auto">
					<div class="card ">
					    <div class="card-header">
                            <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active pt-3">
                                        <table class="table table-striped">
                                        <tr class="thead-dark">
                                            <th>Passenger Number</th>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Age</th>
                                            
                                        </tr>
                                            {passengerList}
                                        </table>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
	    </div>
        <Footer />
        </div>
        );
    }
}
export default viewPassenger;