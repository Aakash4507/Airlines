import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchFlight from './SearchFlight';
import planeBG from "../assets/images/Airline2.jpg";


import homepage from '../assets/images/homepage.jpg';



const features = [
    {
        
        feature : "Memorable Travel"
    },
    {
        
        feature : " Post COVID-19 Safety"
    },
    {
        
        feature : "Service at its best"
    },
    {
        
        feature : "Easy and Convinient Booking"
    }
];



 function Home(props) {
    const featureCard = features.map(f => {
        return (
            <div className="mb-3 mr-auto ml-auto col-lg-3 col-sm-5">
                <div className="card">
                   
                    <div className="card-body" style={styling.card}>
                        <h6 className="card-title">{f.feature}</h6>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Header />

            <div class='pt-6' style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '800px'}}>
            <h1 class="text"> Welcome to Airline</h1>
           
            <main className="mb-4 mp-5">
            {/* <div>
               
            </div> */}

              
               
                <section style={styling.section_bg}>
                    <SearchFlight />
                </section>
                

                <section className="container-fluid  p-3 pb-5 section-bg" style={styling.sectionbg}>
                <h3 style={styling.subheading}>WHY BOOK WITH US?</h3>
                    <div className="m-auto row">
                        {featureCard}
                    </div>
                    
                </section>

                </main>
            </div>
              
            <Footer />

        </div>
    );
}

let styling = {
    subheading : {
        textAlign: "center",
        color: "black",
        fontFamily: "Verdana",
        padding: 20
    },
     section_bg : {
         marginTop:20
     },
     sectionbg : {
        marginTop:200
    },
     card : {
         background : "Black",
        
        color : "white"
     }
}

export default Home;