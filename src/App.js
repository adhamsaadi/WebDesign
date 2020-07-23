import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { green,orange } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';


const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary:orange,
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
  
    <Button variant="outlined" color="default"  className="btn" href="C:\Users\V\Desktop\index.html">
       sign Up 
      </Button>
     
      
      
      <p className="hello">Search for the photo you want </p>
     
      
      <div id="custom-search-input">
                <div class="input-group">
                    <input type="text" class="search-query form-control" placeholder="Search here..."></input>
                </div>
       
			</div>
 

      <br></br> 
      <br></br>
      <br></br> 
      <br></br>
      <br></br>
     
     </section>
	 
	  <section  className="menu">
           
    
      
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
     More Web
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Button onClick={handleClose} href="https://picjumbo.com/">picjumbo</Button>
        <br></br>
        <Button onClick={handleClose} href="https://www.picsearch.com/">picsearch</Button>
        <br></br>
        <Button onClick={handleClose} href="https://unsplash.com/">unsplash</Button>
      </Menu>

        
    
      <Button  color="default"  href="https://www.akkasee.com/" >
       education
      </Button>
      <Button  color="default"  href="https://www.akkasee.com/lms/" >
       class
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
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>
          
          <img className="img1" alt="complex" src=" http://s12.picofile.com/file/8403592934/IMG_9329.jpg    "/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
    
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>
          
          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403533142/IMG_93907.jpg "/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
    


      


      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>
     
          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402255042/DSC_02211.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403533826/IMG_93910.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8402257618/IMG_20190213_223001_469.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402259342/DSC_0008.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8402425642/IMG_91991.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403555000/DSC_0530.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402256326/IMG_92041.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>

      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403593734/IMG_93908.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>


      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8402256950/DSC_0176.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>



      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402258700/DSC_0223.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
    
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402429234/IMG_1071.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
    

        
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403595392/IMG_10724.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>





      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403594350/IMG_10726.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>


      

      


      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8402254692/DSC_0068.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>



      
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8402425250/IMG_9191.JPG "/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>

      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403534184/IMG_93906.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>


      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403674626/IMG_9180.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
        

         </Box>
         </Grid>


     


      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8402257600/DSC_0119.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
        

         </Box>
         </Grid>




         <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403624692/IMG_9357.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          
          
          

      </Box>
      </Grid>



      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403631142/IMG_9202.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          
          
          

      </Box>
      </Grid>

      
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403671618/DSC_0892.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>


          </Box>
      </Grid>


        <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403671450/425234443_115487.jpg"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>


          </Box>
      </Grid>
      

       

      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403630518/IMG_9216.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          
          
          

      </Box>
      </Grid>


     
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403579434/DSC_0023.JPG"/>
       
          <ThemeProvider theme={theme}>
            <Button  color="primary" href=""> 
            <FavoriteBorderOutlinedIcon fontSize="medium">heart</FavoriteBorderOutlinedIcon>
            </Button>
          </ThemeProvider>
          

      </Box>
      </Grid>
     




    </Grid>
        
   </div>



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
