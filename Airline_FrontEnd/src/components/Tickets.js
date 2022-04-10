import React, { Component } from 'react';
import planeBG from "../assets/images/pl.jpg";
import Header from './Header';
import Footer from './Footer';
import BookingService from '../services/BookingService';


class Tickets extends Component {
    state ={multiple_ticket:[]}
    constructor(props){
        super(props)
        this.service = new BookingService();
        this.tickets = []
        if(!localStorage.getItem('user'))
        {
            this.props.history.push('/login')
        }
        else{
            this.service.getTickets().then(response => {
                console.log("Tickets page : " +response)
                this.tickets = (response.data)
                console.log("Tickets: "+ this.tickets)
            });
        }
        
    }

    getTickets = () => {
        this.service.getTickets().then(data => {
            console.log(data);
            this.setState({tickets : data})
        })
    }

    componentDidMount(){
        this.getTickets();
    }

    /** 
     * stores ticket in local storage and redirects to Ticket component
    */
    showTicket(x) {
        console.log(x)
        localStorage.setItem('view-ticket',JSON.stringify(x))
        this.props.history.push('/ticket')
    }

    cancleTicket = (tickets) => {  

        // if(window.confirm("Are you sure you want to cancle the tickets " + tickets + " ?")) {
            this.service.cancleTicket(tickets).then(response => {
                // this.getTickets();
                // this.props.history.push('/tickets')
                window.location.reload(false);
            })
        // }
    }
     
    
    render(){
        if(!this.tickets){return null
        }

        const flightList = this.tickets.map((x)=>
                <tr key={x.ticketNumber}>
                    <td>{x.ticketNumber}</td>
                    <td>{x.booking.flight.source}</td>
                    <td>{x.booking.flight.destination}</td>
                    <td>{x.booking.flight.travelDate}</td>
                    <td>{x.booking.bookingDate}</td>
               
                    <td><button className="btn btn-outline-dark" onClick={() => this.showTicket(x)}>View Ticket</button></td>
                     <td><button className="btn btn-outline-dark" onClick={() => this.cancleTicket(x.ticketNumber)}>Cancel Ticket</button></td> 
                </tr>
        )

        return (
            <div class='pt-5'>
            <Header />  
            
        <div class='pt-5' style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '700px'}}>
        
            <div class="row mb-4">
                <div class="col-lg-12 mx-auto text-center">
                <h1 class="font-weight-bold" style={{color:'black', fontWeight:'80pt'}}>My Bookings</h1>
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
                                            <th>Ticket Number</th>
                                            <th>Source</th>
                                            <th>Destination</th>
                                            <th>Travel Date</th>
                                            <th>Booking Date</th>
                                            <th> View </th>
                                                
                                            <th> Cancel </th>
                                        </tr>
                                            {flightList}
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

export default Tickets;