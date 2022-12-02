import React from "react";
import {GoogleLogout} from "react-google-login";

const clientId = '28465246509-hsdbi1asi067ifu54cqme55fum8sn0hv.apps.googleusercontent.com';

function Logout(){
    const onSuccess = () => {
        console.log('Logout made successfully');
        alert('Logout made successfully ✌');
    };
    return (
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;