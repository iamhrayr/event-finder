import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import Search from './Search';

const AnyReactComponent = ({ text }) => <div className='map-marker'>{text}</div>;

class Dashboard extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ width:'100vw', height:'100vh' }}>
                <Search />
                <GoogleMap
                    bootstrapURLKeys={{ key: 'AIzaSyAzULHzX6kv-wPJBtibaSD--TxMOYiBg1s' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'AA'}
                    />
                </GoogleMap>
            </div>
        )
    }
}

export default Dashboard;
