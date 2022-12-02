import React from "react";
import {GoogleLogin} from "react-google-login";
import { refreshTokenSetup } from "../RefreshToken";
//refresh Token
const clientId = '28465246509-hsdbi1asi067ifu54cqme55fum8sn0hv.apps.googleusercontent.com';

function Login(){
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
          `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
        refreshTokenSetup(res);
    };
    
    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
          `Failed to login. 😢`
        );
    };

    return (
        <div>
            <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px'}}
            isSignedIn={true}
            />
        </div>
    );
}

export default Login;