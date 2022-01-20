
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Weather extends Component {


    constructor() {

        super();
        //Initialize the state in the constructor
        this.state = {
            weather: [],
        }
    }
    /*componentDidMount() is a lifecycle method
* that gets called after the component is rendered
*/

    componentDidMount() {
        /* fetch API in action */
        fetch('/api/v1/weather')
            .then(response => {
                return response.json();
            })
            .then(weather => {
                //Fetched product is stored in the state
                this.setState({ weather });
            });
    }

    renderWeather() {
        return this.state.weather.map(weather => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */

                <div className="row" key={weather.id}>
                    <div className="col-sm">
                        {weather.ciudad}
                    </div>
                    <div className="col-sm">
                        {weather.descricionestado}
                    </div>
                    <div className="col-sm">
                        {weather.fecha}
                    </div>
                </div>

            );
        })
    }


    render() {
        return (
            <div className="container">
                <br></br>
                <div className='text-center'><h3>Listado de Humedad</h3></div>
                <div>
                    <div className="container">

                        {this.renderWeather()}

                    </div>
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <div class="row">
                        <div class="col-4 col-sm-4 bg-warning">
                            <a href="/" className="link-primary" >Pincipal</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Weather;

if (document.getElementById('weather')) {
    ReactDOM.render(<Weather />, document.getElementById('weather'));
}
