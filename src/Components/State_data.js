import React from 'react';
import Axios from 'axios';
import { Accordion } from 'react-bootstrap';

class State_data extends React.Component {

    constructor() {
        super();
        this.state = {
            storedData: ""
        };
    }

    componentDidMount() {
        Axios.get("https://data.covid19india.org/state_district_wise.json").then(response => {
            this.setState({ storedData: response.data });
        });
    }

    render() {

        let keys = Object.keys(this.state.storedData);


        return (

            <Accordion><br />
                {
                    keys.map((itm, ky) => {

                        let districts = this.state.storedData[itm].districtData;
                        console.log(districts);
                        let district_keys = Object.keys(districts);

                        let total_active = 0;
                        let total_cases = 0;
                        let total_deaths = 0;
                        let total_recovered = 0;

                        let district_list=[];

                        for (let x in districts) {
                            total_cases += districts[x].confirmed;
                            total_active += districts[x].active;
                            total_recovered += districts[x].recovered;
                            total_deaths += districts[x].deceased;

                            let ob = districts[x];
                            ob["district_name"]= x;
                            district_list.push(ob);
                        }


                        return (

                            <Accordion.Item  eventKey={ky}>
                                <Accordion.Header style={{marginRight: 3}} >{itm} <span className='bg-secondary p-1 mx-3' style={{color: "white", borderRadius: 5}}>Total cases : {total_cases}</span> <span className='bg-secondary p-1 mx-3' style={{color: "white", borderRadius: 5}}>Total active : {total_active}</span><span className='bg-secondary p-1 mx-3' style={{color: "white", borderRadius: 5}}> Recovered : {total_recovered}</span> <span className='bg-secondary p-1 mx-3' style={{color: "white" , borderRadius: 5}}>Deaths : {total_deaths}</span></Accordion.Header>
                                <Accordion.Body>
                                    <table className='table table-bordered table-stripped'>
                                        <thead>
                                            <tr>
                                                <td>Districts</td>
                                                <td>Confirmed</td>
                                                <td>Active</td>
                                                <td>Recovered</td>
                                                <td>Deaths</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                district_list.map((itm,ky) => {
                                                    return(
                                                        <tr>
                                                            <td>{itm.district_name}</td>
                                                            <td>{itm.confirmed}</td>
                                                            <td>{itm.active}</td>
                                                            <td>{itm.recovered}</td>
                                                            <td>{itm.deceased}</td>

                                                        </tr>
                                                    );
                                                })
                                            }
                                            


                                        </tbody>
                                    </table>
                                </Accordion.Body>
                            </Accordion.Item>

                        )



                    })
                }


            </Accordion>

        )
    }
}

export default State_data;