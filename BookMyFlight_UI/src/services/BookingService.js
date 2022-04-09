import axios from "axios"


export default class BookingService {
    constructor() {
        this.uri = "http://localhost:8980/book";
        this.ticket = [];

    }

    // Service method to add booking 
    async addBooking(numberOfSeatsToBook,flightNumber,source,destination,date) {
        return await axios.post(this.uri+"/booking",{numberOfSeatsToBook},
        {params:{"fid":flightNumber,"source":source,"destination":destination,"date":date}}).then(response => {
            console.log(response.data)
            if(response.data.length>3){
                alert(response.data)
                return response
            } else{
                localStorage.setItem("bid",parseInt(response.data))
                return response
            }
        })
    }

    // Service method to add passengers
    async addPassengers(pass1){
        return await axios.post(this.uri+"/passenger/"+localStorage.getItem("bid"),pass1).then(response => {
            console.log(response.data)
        })
    }

    // Service method to generate ticket 
    async generateTicket(ticket){
        const uid = JSON.parse(localStorage.getItem("user")).userId;
        return await axios.post(this.uri+"/ticket/"+uid+"/"+localStorage.getItem("bid")+"/1",ticket)
        .then(response => {
            console.log(response.data)
            localStorage.setItem("ticket",JSON.stringify(response.data))
            return response;
        })
    }
       
    
    async cancleTicket(ticket){
        return await fetch(this.uri + "/remove/"+ ticket, {
            method:"DELETE",
            mode:"cors"
                   }).then(response => {
            if(!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
        }).catch(error => {
            console.log("Error : " + error.message);
        })

  
}
    // Service method to fetch tickets based on userid
    async getTickets() {
        
        const uid = JSON.parse(localStorage.getItem("user")).userId;
        return await axios.get(this.uri+"/getTickets/"+uid)
        .then(response => {
            console.log(response.data)
            // localStorage.setItem("tickets",JSON.stringify(response.data))
            return response;
        })
    }

    async getPassenger() {

         const fno = JSON.parse(localStorage.getItem("flight")).flightNumber;
        return await axios.get(this.uri+"/getPassenger/"+fno)
        .then(response => {
            console.log(response.data)
            // localStorage.setItem("tickets",JSON.stringify(response.data))
            return response;
        })
    }


}