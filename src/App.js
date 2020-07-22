import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { green,red } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem  from '@material-ui/core/MenuItem';


const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
      },
      });


function App(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };


 

 
  return (

    
    <div >

   
    <section  className="header">

    
       		  <IconButton aria-label="fa fa-home" className="home" > 
            
       <SvgIcon>
       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
       
       </SvgIcon>
    </IconButton>
  
    <Button variant="outlined" color="default"  className="btn" href="C:\Users\V\Desktop\index.php">
       sign Up 
      </Button>
     
      
      
      <p className="hello">Search for any photo you want</p>
 


      <br></br> 
      <br></br>
      <br></br> 
      <br></br>
      <br></br>
     
     </section>
	 
	  <section  className="menu">
           
    
      
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    Related-websites
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>unsplash</MenuItem>
        <MenuItem onClick={handleClose}>picjumbo</MenuItem>
        <MenuItem onClick={handleClose}>picsearch</MenuItem>
      </Menu>
    
    
      <Button  color="default"  href="https://www.google.com/" >
        google
      </Button>
      <Button  color="default"  href="http://www.picofile.com/" >
      picofile
      </Button>
      
      <Button color="default" onClick={props.changePageEvent}> about</Button>
   
	 
      </section>
	 
     <section className="mainbody">
     
     <div class="box1">


     <Grid container spacing={1}>
    <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402256684/IMG_926505.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
           
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403534184/IMG_93906.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
          
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402255042/DSC_02211.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403533142/IMG_93907.jpg "/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
         
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403533826/IMG_93910.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
           
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8402257618/IMG_20190213_223001_469.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
           
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402259342/DSC_0008.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403579434/DSC_0023.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403555000/DSC_0530.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402256326/IMG_92041.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>

      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8402425642/IMG_91991.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
           
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>


      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8402256950/DSC_0176.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
           
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>



      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402258700/DSC_0223.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
           
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
    
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402429234/IMG_1071.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
           
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
    




      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8402425250/IMG_9191.JPG"/>
          
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
          
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>



    </Grid>
        
   </div>



     </section>



     <section className="page">
     
    
    {/* <Button variant="outlined" color="default" onClick={props.changePageEvent}>"">>"</Button> */}
   
     </section>
    


   <section className="footer">
    
    <div>
      <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Eu7KIQ2BXbFiPMJtoMbQfyyti2_HkMX5EXIDUoFEfThswbRZ&usqp=CAU" />
      <br></br>
      about us:we are a small team worker from Iran,University of guilan.
      </div>
      <p>Contact:pixcel.team@yahoo.com</p>
      </section>    

    </div>
    
  );
  
}

export default App;
