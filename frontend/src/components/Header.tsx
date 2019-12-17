import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

class Header extends React.Component<any, any>{

    public render(){
        return (
            <div>
                <AppBar position={"sticky"} style={{backgroundColor:"#e1e713"}}>
                    <Toolbar>
                        <img src={"/logo.jpg"} style={{maxHeight:80}}/>
                        <Typography style={{color:"#e68113", paddingLeft:40}} variant="h5">
                            Kweeter
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header