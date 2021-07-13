import React from 'react';
import { Dialog,DialogTitle,Typography,DialogContent } from '@material-ui/core';
import '../App.css';

export default function Login(props) {
    const { title, children, openPopup, setOpenPopup } = props;


        return (
            <Dialog open={openPopup} maxWidth="md" style={{ display: 'flex',alignItems:"center"}}>
            <DialogTitle >
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 ,textAlign :"center",fontSize:"30px"}}>
                        {title}
                    </Typography>
                   
                        
                   <i onClick={()=>{setOpenPopup(false)}} className="fas fa-times"></i>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
        );
      }
      
