import React from 'react';
import { Dialog,DialogTitle,Typography,DialogContent } from '@material-ui/core';

export default function Commencer(props) {
    const { title, children, openCom, setOpencom } = props;


        return (
            <Dialog open={openCom} maxWidth="xs"  >
                
            <DialogTitle style={{backgroundColor:"#391465"}}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 ,textAlign :"center",fontSize:"30px"}}>
                        {title}
                    </Typography>
                   
                        
                   <i onClick={()=>{setOpencom(false)}} className="fas fa-times"></i>
                </div>
            </DialogTitle>
           <DialogContent style={{ backgroundColor:"#391465" }} onClick={()=>{setOpencom(false)}} >
           {children }
            </DialogContent>
           
        </Dialog>
        );
      }
      