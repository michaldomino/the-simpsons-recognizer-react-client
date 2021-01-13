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

interface IBaseAppBarProps {
    title: string
    buttons?: AppBarButtonProps[]
}

export interface AppBarButtonProps {
    text: string
    onClickAction: () => void
}

export const BaseAppBar: React.FC<IBaseAppBarProps> = (props) => {
    const {title, buttons} = props
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        {title}
                    </Typography>
                    {buttons?.map(value =>
                        <Button
                            color='inherit'
                            onClick={value.onClickAction}
                        >
                            {value.text}
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}