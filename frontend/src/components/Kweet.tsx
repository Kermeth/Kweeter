import React from "react";
import CardContent from "@material-ui/core/CardContent";
import {Avatar, Card} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export const Kweet: React.FC = () => {
    return (
        <Card>
            <CardContent>
                <Avatar>K</Avatar>
                <Typography>
                    CONTENT OF THE KWEET
                </Typography>
            </CardContent>
        </Card>
    );
};