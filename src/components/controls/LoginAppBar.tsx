import React from "react";
import {AppBar, Button, createStyles, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const LoginAppBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Login
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() =>
                            console.log('Register clicked')
                        }
                    >
                        Register
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}