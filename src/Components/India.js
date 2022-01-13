import React from 'react';
// <link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.5/css/flag-icons.min.css"/>
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import State_data from './State_data';

import axios from 'axios';

class India extends React.Component {

    constructor(){
        super();
        this.state={
            data : ""
        };
    }

    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=> {
            this.setState({data: response.data});
        })
    }

    render() {
        return (

            <div >

                <div className="row ">
                    <div className="col-md-12 ">
                        <br />
                        <img  src='https://www.worldometers.info/img/flags/small/tn_in-flag.gif' style={{ height: 35 }} />
                        
                        <h4 className=" mt-1">INDIA</h4>

                    </div>
                </div>

                <div className="row mt-1">
                    <div className="col-md-3 ">

                        <Card >
                            
                            <Card.Body className='text-center bg-primary p-4' style={{color: "white"}}>
                                <Card.Title>TOTAL CASES</Card.Title>
                                <h3>{this.state.data.cases}</h3>
                                <Card.Text>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3 ">
                    <Card >
                            <Card.Body className='text-center bg-warning p-4' style={{color: "white"}}>
                                <Card.Title>ACTIVE CASES</Card.Title>
                                <h3>{this.state.data.active}</h3>
                                <Card.Text>
                                  
                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </div>
                    <div className="col-md-3 ">
                    <Card >
                            <Card.Body className='text-center bg-success p-4' style={{color: "white"}}>
                                <Card.Title>RECOVERED</Card.Title>
                                <h3>{this.state.data.recovered}</h3>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </div>
                    <div className="col-md-3 ">
                    <Card >
                            <Card.Body className='text-center  bg-danger p-4' style={{color: "white"}}>
                                <Card.Title>DEATHS</Card.Title>
                                <h3>{this.state.data.deaths}</h3>
                                <Card.Text>
                               
                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </div>

                </div>
                <div className='col-md-12'>
                        <State_data/>
                </div>
            </div>


        )
    }
}

export default India;