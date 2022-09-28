import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ height: "30%", width: "30%" ,marginTop: "1%", marginLeft: "15%" }}
        zoom={10}
        initialCenter={{
          lat: 33.961055,
          lng: 10.01597,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA4FK9Rk5ZW1-6og6tZ0kVI2idYr2zT4qY"
})(MapContainer);
