import React from "react";
import Grid from "@material-ui/core/Grid";
import {Kweet} from "./Kweet";

export const TimeLine: React.FC = () => {
    return (
        <Grid
            container
            spacing={3}
            direction={"column"}
            alignItems={"center"}
            justify={"space-evenly"}
            wrap={"nowrap"}>
            <Grid item xs>
                <Kweet />
            </Grid>
            <Grid item xs>
                <Kweet />
            </Grid>
            <Grid item xs>
                <Kweet />
            </Grid>
            <Grid item xs>
                <Kweet />
            </Grid>
            <Grid item xs>
                <Kweet />
            </Grid>
            <Grid item xs>
                <Kweet />
            </Grid>
            <Grid item xs>
                <Kweet />
            </Grid>
        </Grid>
    );
};