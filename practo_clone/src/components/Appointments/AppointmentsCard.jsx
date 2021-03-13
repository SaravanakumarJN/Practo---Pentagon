import React from 'react'
import styles from "./AppointmentsCard.module.css"
import Button from '@material-ui/core/Button';
import moment from "moment";
import {cancelAppointment} from "../../utils"
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Typography from '@material-ui/core/Typography';
import { Divider, Paper } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const AppointmentsCard = ({doctorData, time, id, status}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const [dialogDelete, setDeleteDialog] = React.useState(false);

  const handleDeleteDialogOpen = () => {
    setDeleteDialog(true);
  }

  const handleDeleteDialogClose = () => {
      setDeleteDialog(false);
  }

  const handleCancel = () => {
    console.log(id);
    handleDeleteDialogOpen();
  }


  const handleConfirmCancel= () => {
    setDeleteDialog(false);
    setOpen(true);
    cancelAppointment(id)
    .then(res => {
      console.log(res.data);
    })
}


  return (
    <div className={styles.detailCont}>
      <div className={styles.date}>
          <h3>{moment(time).format('D')}</h3>
          <h5 className={styles.specialP}>{moment(time).format('MMM')}</h5>
      </div>
      <div className={styles.userDetails}>
        <p><b>{doctorData.name}</b></p>
        <p className={styles.specialP}>{moment(time).format('ddd, MMM Do')}</p>
        <p className={styles.specialP}>{doctorData.clinic}</p>
        <div className={styles.active}>
          {
            status === true &&
            <p>Active</p>
          }
        </div>
        <div className={styles.cancelled}>
          {
            status === false &&
            <p>Cancelled</p>
          }
        </div>
      </div>
      <div className={styles.action}> 
        {/* <Button variant="outlined" color="primary" style={{marginRight: "1em"}}>
          View Details
        </Button> */}
        {
          status === true &&
          <Button variant="outlined" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        }
      </div>
      <Dialog
          open={dialogDelete}
          onClose={handleDeleteDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
          <DialogTitle id="alert-dialog-title">
              <ErrorOutlineIcon/>
              <Typography variant="subtitle1">
                  Are you sure you want to delete?
              </Typography>
          </DialogTitle>
          <Divider/>
          <DialogActions>
          <Button onClick={handleDeleteDialogClose} variant="outlined">
              Cancel
          </Button>
          <Button color="secondary" variant="contained" onClick={handleConfirmCancel}>
              Delete
          </Button>
          </DialogActions>
      </Dialog>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Appointment Cancelled
        </Alert>
      </Snackbar>
    </div>
  )
}

export {AppointmentsCard}
