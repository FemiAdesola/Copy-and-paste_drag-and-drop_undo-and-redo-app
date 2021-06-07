import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';


function App() {
    const [text, setText] = React.useState("Some text");
    const [text2, setText2] = React.useState("Another text");
    const [text3, setText3] = React.useState("Third text here");
    

	
	const handleDragStart = (event) => {
        event.dataTransfer.setData("text/plain", text);
    }
    const handleDragStart2 = (event) => {
        event.dataTransfer.setData("text/plain", text2);
    }
    const handleDragStart3 = (event) => {
        event.dataTransfer.setData("text/plain", text3);
	}
	const handleDrop = (event) => {
		var items = event.dataTransfer.items;
		for (var i = 0; i < items.length; ++i) {
			var item = items[i];
			if (item.kind === 'string') {
				event.preventDefault();
				const data = event.dataTransfer.getData("text");
				setText(data);
				return;
			}
		}
		event.preventDefault();
    }
    
    	const handleDrop2 = (event) => {
		var items = event.dataTransfer.items;
		for (var i = 0; i < items.length; ++i) {
			var item = items[i];
			if (item.kind === 'string') {
				event.preventDefault();
				const data = event.dataTransfer.getData("text");
				setText2(data);
				return;
			}
		}
		event.preventDefault();
        }
    const handleDrop3 = (event) => {
		var items = event.dataTransfer.items;
		for (var i = 0; i < items.length; ++i) {
			var item = items[i];
			if (item.kind === 'string') {
				event.preventDefault();
				const data = event.dataTransfer.getData("text");
				setText3(data);
				return;
			}
		}
		event.preventDefault();
	}
	
	const handleDragEnter = (event) => {
		var items = event.dataTransfer.items;
		for (var i = 0; i < items.length; ++i) {
			var item = items[i];
			if (item.kind === 'string') {
				event.preventDefault();
				return;
			}
		}
	}
	
    const handleDragOver = (event) => {
    
            event.preventDefault();
            event.dataTransfer.dropEffect = "copy"
    }

    const handleDragOver2 = (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "copy"
    }
    const handleDragOver3 = (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "copy"
    }
    
	const pagePaste = (event) => {
		let paste = event.clipboardData.getData('text');
		setText(paste);
		event.preventDefault();
	}
	
    const pageCopy = (event) => {
            event.clipboardData.setData('text/plain', text);
            event.preventDefault();
        }
	

    return (
        <Paper  variant="outlined" square style={{backgroundColor: 'green', width: 500, margin: 50, marginTop: 20, padding: 50, textAlign: 'center',}} display="flex" justifyContent="center"  bgcolor="background.paper">
		<Typography style={{backgroundColor:"gray", marginBottom:40}} >
                    Drag and drop text to change the text between each column.
			</Typography>
            <Grid  style={{margin:10}} >
                <Button style={{backgroundColor:"blue", margin:5}} id="DraggingText" variant='h3'
				onDragStart={handleDragStart} 
				draggable={true} 
				onDrop={handleDrop} 
				onDragEnter={handleDragEnter} 
				onDragOver={handleDragOver}>
				{text}
                </Button>
                <Button style={{backgroundColor:"indigo", margin:5}} id="DraggingText" variant='h3' 
				onDragStart={handleDragStart2} 
				draggable={true} 
				onDrop={handleDrop2} 
				onDragEnter={handleDragEnter} 
				onDragOver={handleDragOver2}>
				{text2}
                </Button>
                <Button style={{backgroundColor:"white", margin:5}} id="DraggingText" variant='h3' 
				onDragStart={handleDragStart3} 
				draggable={true} 
				onDrop={handleDrop3} 
				onDragEnter={handleDragEnter} 
				onDragOver={handleDragOver3}>
				{text3}
			</Button>
            </Grid>
            
            <TextField
                style={{ width: 500,height:40, backgroundColor: "blueviolet", margin:10 }}
                draggable={true}
                onPaste={pagePaste} onCopy={pageCopy}
                contentEditable={true}
                placeholder="Drag and paste text from the top here"
            />
           </Paper>
	);
}
export default App;
