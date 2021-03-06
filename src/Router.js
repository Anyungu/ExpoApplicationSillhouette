
import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import landingPage from './components/landingPage';


const RouterComponent = () => {

    return(
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="auth">
                    
                    <Scene 
                    key = "landingPage" 
                    component= {landingPage}
                    hideNavBar
                    initial
                    /> 

               </Scene>


                
                
            </Scene>
        </Router>
    );

};

export default RouterComponent;
