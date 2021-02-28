import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import { light, dark } from "../theme";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

import ChildComponent from "./ThemeComponents/ChildComponent";

const useStyles = makeStyles((theme) => ({
    Button: {
        width:300,
        background: 'linear-gradient(45deg, #0073bf 30%, #02dbd0 90%)'
    }
}));

export default function Theme(props){
    const classes = useStyles();
    const theme = useTheme()
    const [isLight, setIsLight] = useState(true);
    const [showTheme, setshowTheme] = useState(false);

    return(
        <ThemeProvider theme={isLight?light:dark}>
            <CssBaseline />
            <Grid container direction="column" alignItems="center">
                {/* //merge styles makeStyles and theme provider */}
                <Button className={classes.Button} onClick={()=>setIsLight(!isLight)}>
                    Switch Theme
                </Button>
                <Button onClick={()=>setshowTheme(!showTheme)}>
                    Show Theme Detail
                </Button>
                {showTheme&&
                <pre>
                    theme.overrides.MuiButton:
                    {JSON.stringify(theme.overrides.MuiButton, null, 2)}
                </pre>}
                <ChildComponent />

            </Grid>
            
        </ThemeProvider>
    )
}