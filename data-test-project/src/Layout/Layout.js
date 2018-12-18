import React, { Component } from 'react';
import ChartWindow from '../containers/ChartWindow';
import Info from "../components/Info/Info";
import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <div className='flex-container'>
            <div className='header' >Data visualisation</div>  
            <div>
                <div className='row'>
                    <div className='side'>
                        <h3>Diagram Window</h3>
                            <div className='diagram-window'>
                                <ChartWindow /> 
                            </div>        
                            <div>Interaction settings
                            </div> 
                        </div>
                     <div className='right-side'>
                        <Info />
                        <div>
                            <h3>Data thingies</h3>
                            <p>Headline</p>
                            <p>X-value</p>
                            <p>Y-value</p>
                            <p>Text field for data</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Layout;