import React from 'react';
import axios from 'axios';

class World extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get("https://corona.lmao.ninja/v2/countries").then(response => {
            this.setState({ data: response.data });

        })
    }

    render() {



        return (

            <table className='table mt-2 table-primary table-stripped table-bordered'>
                <thead>
                    <tr>
                        <td>Country</td>
                        <td>Total cases</td>
                        <td>Recovered</td>
                        <td>Deaths</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((itm, ky) => {

                            return (

                                <tr>
                                    <td>{itm.country}<img style={{width: 50, marginLeft: 45}}  src={itm.countryInfo.flag}/></td>
                                    <td>{itm.cases}</td>
                                    <td>{itm.recovered}</td>
                                    <td>{itm.deaths}</td>
                                </tr>
                            )
                        })

                    }
                        
                    </tbody>

            </table>
        )

    

}
}

export default World;