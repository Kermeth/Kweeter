import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";


export const Header: React.FC = () => {
    return (
        <div>
            <AppBar position={"sticky"} style={{backgroundColor:"#e1e713"}}>
                <Toolbar>
                    <img src={"/logo.jpg"} style={{maxHeight:80}} alt={"aaa"}/>
                    <Typography style={{color:"#e68113"}} variant="h5">
                        Kweeter
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};