import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'; 
import getz from './getz.jpg';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

function Ap() {
    const [image, setImage] = React.useState(getz);

	const imageDragStart = (event) => {
		event.dataTransfer.setData("image/jpeg", event.target.src);
		event.dataTransfer.dropEffect = "copy";
	}
	
	const imageOnDrop = (event) => {
		event.preventDefault();
		let file = event.dataTransfer.files[0];
		if (file) {
			let reader = new FileReader()
			reader.onloadend = function(evt) {
				setImage(reader.result);
			};
			reader.readAsDataURL(file)
		}
	}

	const imageDragEnter = (event) => {
		event.preventDefault();
		let file = event.dataTransfer.files[0];
		if (file) {
			event.preventDefault(); 
		}
	}	
	const imageDragOver = (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "copy"
	}
    
    // paste from lecture
    const pastehandler = (event) => {
        let paste = event.clipboardData.image[0];
        if (paste.kind === "file" && (paste.type === "image/png" || paste.type === "image/jpeg")) {
            let reader = new FileReader()
            reader.readAsDataURL(paste.getAsFile())
        }
    }
	///////

    
	
    return (
        <Paper  variant="outlined" square style={{backgroundColor: 'green', width: 500, margin: 50,marginLeft:50, marginTop: 20, padding: 50, textAlign: 'center',}} display="flex" justifyContent="center"  bgcolor="background.paper">
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" onClick={image}>Paste any image inside gray box </IconButton>
            
                    </Toolbar>
            </AppBar>
            <Typography style={{backgroundColor: 'white',marginTop: 20, textAlign: 'center'}} >
                copy the image inside the gray box and paste the image inside purple box
                </Typography>
			<Box style={{backgroundColor: 'gray', width: 400, margin: 10, marginTop: 10, padding: 50, textAlign: 'center',}} display="flex" justifyContent="center">
				
                <img src={image}
					onDragStart={imageDragStart} 
					onDragEnter={imageDragEnter}
					draggable={true} 
					onDrop={imageOnDrop} 
                    onDragOver={imageDragOver}
                    onCopy={image}
                />
                
            </Box>
            <Box id="picutreCaption" variant='caption'>
				copy and paste or Drag and drop image above in the box below.
			</Box>
			<Box  style={{width: 500, height: 400, backgroundColor: "blueviolet", margin:10}} onPaste={image} onCopy={image} contentEditable={true} >

		</Box>
			
</Paper>
	);
}

export default Ap;