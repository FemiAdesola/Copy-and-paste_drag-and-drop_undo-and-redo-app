import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
	valueText: {
		fontWeight: "bold",
        justifyContent: "flex-start",
	}
}));


function A() {
    const [value, setValue] = React.useState([]);
    const [undo, setUndo] = React.useState([]);
	const [redo, setRedo] = React.useState([]);
	
    // reset line 
    const reset = (event) => {
        setValue("");

    };

    // for styles 
	const styledClasses = useStyles();
	
    // for adding value to line 
	const addToValue = (event) => {
        setValue(value + event);
	}
    // for value buttons

	const buttons = [];
	for (let i = 0; i < 6; i++) {
        let handler = (event) => {
            addToValue(i);
            setUndo([...undo, value]);
            setRedo([]);
        };
        buttons.push(<Button style={{ margin: 10 }} key={i} color="info" variant="contained" onClick={handler}>{i}</Button>);
        
	}
	
    // to get undo 
    const undoUpdate = (event) => {
       setRedo(redo.concat([value]));
        setValue(undo[undo.length - 1]);
        setUndo(undo.slice(0, undo.length-1));
    }
    // to get redo 
    const redoUpdate = (event) => {
        setUndo(undo.concat([value]));
        setValue(redo[redo.length - 1]);
        setRedo(redo.slice(0, redo.length-1));
	}
	
    return (
        <Paper  variant="outlined" square style={{backgroundColor: 'green', width: 400, margin: 100, marginTop: 50, padding: 50, textAlign: 'center', borderRadius:50 }} display="flex" justifyContent="center"  bgcolor="background.paper">
            <div className="App">
               
                <AppBar style={{ backgroundColor: "gray", height:70, width:300, marginLeft:50, borderRadius:16 }} position="static" >
                <Toolbar style={{marginLeft:10}}  >
                        <IconButton disabled={undo.length===-1} onClick={undoUpdate}>
                            <Button  color="info" variant="contained">Undo <UndoIcon/> </Button>
				</IconButton>
                        <IconButton disabled={redo.length ===-1} onClick={redoUpdate}>
					<Button style={{margin:10}}  color="info" variant="contained">Redo <RedoIcon/> </Button>
				</IconButton>
                    </Toolbar>
            </AppBar>


			<Box style={{backgroundColor:"burlywood", marginTop: 40, marginLeft: 10 }} p={2} display="center" height={20}  borderRadius={16} className={styledClasses.valueText}>
				{value}
                </Box>

        
                <Box style={{backgroundColor: 'blue', marginLeft: 10 }} color="white" borderRadius={26}>
				
                    <Box style={{ margin: 0 }} display="center" p="1rem" height={50}>
					{buttons.slice(1, 5)}
				
                    </Box>
			</Box>
			
                <Box style={{display:"block", justifyContent:"center", alignitems:"center", padding: 10,}}>
                    <Button variant="contained" color="secondary" onClick={reset}>Reset</Button>
                </Box>
            

            </div>
        </Paper>
	);
}
export default A;
