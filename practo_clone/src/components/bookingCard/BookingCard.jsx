import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import moment from "moment";
import Button from '@material-ui/core/Button';
import {getBookedSlots} from "../../utils";
import styles from "./BookingCard.module.css"
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import { Divider } from '@material-ui/core';
import { useHistory } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  // console.log(moment().day(7).format('ddd, MMM Do'));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80%',
    margin: "auto"
  },
  slotsCont: {
    display: "flex",
    flexWrap: "wrap",
  },
  icon: {
    color: "#414146"
  },
  slotItem:{
    margin: "0.5em"
  }
}));

const BookingCard = ({doctors_id}) => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [date, setDate] = React.useState(moment().format());
  const [bookedSlots, setBookedSlots] = React.useState([]);
  const slotArray = [
    {
      time : "09:30",
      timeStr : "09:30",
      type : 0
    },
    {
      time : "10:00",
      timeStr : "10:00",
      type : 0
    },
    {
      time : "10:30",
      timeStr : "10:30", 
      type : 0
    },
    {
      time : "11:30",
      timeStr : "11:30",   
      type : 0
    },
    {
      time : "12:00",
      timeStr : "12:00",
      type : 1
    },
    {
      time : "12:30",
      timeStr : "12:30",   
      type : 1
    },
    {
      time : "13:00",
      timeStr : "1:00",  
      type : 1
    },
    {
      time : "13:30",
      timeStr : "1:30",  
      type : 1
    },
    {
      time : "16:00",
      timeStr : "4:00",  
      type : 2
    },
    {
      time : "16:30",
      timeStr : "4:30",   
      type : 2
    },
    {
      time : "17:00",
      timeStr : "5:00",    
      type : 2
    },
    {
      time : "17:30",
      timeStr : "5:30",
      type : 2
    },
    {
      time : "18:00",
      timeStr : "6:00",
      
      type : 2
    },
    {
      time : "18:30",
      timeStr : "6:30",  
      type : 2
    },
    {
      time : "19:00",
      timeStr : "7:00",
      type : 2
    },
    {
      time : "20:00",
      timeStr : "8:00",    
      type: 3
    },
    {
      time : "20:30",
      timeStr : "8:30", 
      type: 3
    },
    {
      time : "23:30",
      timeStr : "11:30", 
      type: 3
    }
  ]
  const [slots, setSlots] = React.useState([...slotArray]);
  const [allSlots, setAllSlots] = React.useState([]);
  const arr= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const handleBookedSlots = (data, newValue) =>{
    const dateStr = moment().add(newValue, "days").format();
    let slots = [];

    data?.map(item => {
      return item.time.substring(0, 11) === dateStr.substring(0, 11) 
      ? slots.push(item.time.substring(11, 16)): null;
    })
    setBookedSlots(slots);
  }


  React.useState(() => {
    getBookedSlots(doctors_id)
    .then(res => {
      setAllSlots(res.data.data);
      handleBookedSlots(res.data.data);
      console.log(res.data.data);
    })
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDate(moment().add(newValue, "days").format());
    handleBookedSlots(allSlots, newValue);
  };

  const handleBookSlot = (time) => {
    const dateTimeStr = date.substring(0, 11) + time+ ":00+05:30"
    // const postObj = {
    //   doctor_id : doctors_id,
    //   name : "John Doe",
    //   contact : "8425028144",
    //   time : dateTimeStr
    // }
    // bookSlot(postObj)
    console.log(time)
    history.push(`/appointment/${doctors_id}/${dateTimeStr}`)
    
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Today" {...a11yProps(0)}/>
          <Tab label="Tomorrow" {...a11yProps(1)} />
          <Tab label={moment().add(2, "days").format('ddd, MMM Do')} {...a11yProps(2)} />
          <Tab label={moment().add(3, "days").format('ddd, MMM Do')} {...a11yProps(3)} />
          <Tab label={moment().add(4, "days").format('ddd, MMM Do')} {...a11yProps(4)} />
          <Tab label={moment().add(5, "days").format('ddd, MMM Do')} {...a11yProps(5)} />
          <Tab label={moment().add(6, "days").format('ddd, MMM Do')} {...a11yProps(6)} />
          <Tab label={moment().add(7, "days").format('ddd, MMM Do')} {...a11yProps(7)} />
          <Tab label={moment().add(8, "days").format('ddd, MMM Do')} {...a11yProps(8)} />
          <Tab label={moment().add(9, "days").format('ddd, MMM Do')} {...a11yProps(9)} />
          <Tab label={moment().add(10, "days").format('ddd, MMM Do')} {...a11yProps(10)} />
          <Tab label={moment().add(11, "days").format('ddd, MMM Do')} {...a11yProps(11)} />
          <Tab label={moment().add(12, "days").format('ddd, MMM Do')} {...a11yProps(12)} />
          <Tab label={moment().add(13, "days").format('ddd, MMM Do')} {...a11yProps(13)} />
          <Tab label={moment().add(14, "days").format('ddd, MMM Do')} {...a11yProps(14)} />
          <Tab label={moment().add(15, "days").format('ddd, MMM Do')} {...a11yProps(15)} />
        </Tabs>
      </AppBar>
      {
        arr.map(idx => (
          <TabPanel value={value} index={idx} className={classes.tabPanel} key={idx}>
            <Box className={classes.slotsCont}>
              <div className={styles.slotsCont_time}>
                <WbSunnyOutlinedIcon className={styles.icon} color="action"/>
                <p>Morning</p>
              </div>
              <div className={styles.slotsCont_slots}>
                {
                  [...slots].map(item => (
                    // console.log(Number(date.substring(11, 13)+ date.substring(14, 16)) , Number(item.time.substring(0, 2) + item.time.substring(3, 5)));
                    item.type === 0 && !bookedSlots.includes(item.time) 
                    && <Button variant="outlined" className={classes.slotItem} key={item.time} value={item.time} color="primary" onClick={(e) => handleBookSlot(e.target.value)} disabled={
                      value === 0 ? Number(date.substring(11, 13)+ date.substring(14, 16)) + 15 < Number(item.time.substring(0, 2) + item.time.substring(3, 5))? false : true  : false
                    }>{item.timeStr}</Button>
                  ))
                }     
              </div>
            </Box>
            <Divider/>
            <Box className={classes.slotsCont}>
              <div className={styles.slotsCont_time}>
                <FlareOutlinedIcon className={styles.icon} color="action"/>
                <p>Afternoon</p>
              </div>
              <div className={styles.slotsCont_slots}>
              {
                  [...slots].map(item => (
                    item.type === 1 && !bookedSlots.includes(item.time) 
                    && <Button variant="outlined" className={classes.slotItem} key={item.time} value={item.time} color="primary" onClick={(e) => handleBookSlot(e.target.value)} disabled={
                      value === 0 ? Number(date.substring(11, 13)+ date.substring(14, 16)) + 15 < Number(item.time.substring(0, 2) + item.time.substring(3, 5))? false : true  : false
                    }>{item.timeStr}</Button>
                ))
                }    
              </div>
            </Box>
            <Divider/>
            <Box className={classes.slotsCont}>
              <div className={styles.slotsCont_time}>
                <Brightness2OutlinedIcon className={styles.icon} color="action"/>
                <p>Evening</p>
              </div>
              <div className={styles.slotsCont_slots}>
              {
                  [...slots].map(item => (
                    item.type === 2 && !bookedSlots.includes(item.time) 
                    && <Button variant="outlined" className={classes.slotItem} key={item.time} value={item.time} color="primary" onClick={(e) => handleBookSlot(e.target.value)} disabled={
                      value === 0 ? Number(date.substring(11, 13)+ date.substring(14, 16)) + 15 < Number(item.time.substring(0, 2) + item.time.substring(3, 5))? false : true  : false
                    }>{item.timeStr}</Button>
                ))
                }    
              </div>
            </Box>
            <Divider/>
            <Box className={classes.slotsCont}>
              <div className={styles.slotsCont_time}>
                <NightsStayOutlinedIcon className={styles.icon} color="action"/>
                <p>Night</p>
              </div>
              <div className={styles.slotsCont_slots}>
              {
                  slots.map(item => (
                    // console.log(Number(date.substring(11, 13)+ date.substring(15, 16)), Number(item.time.substring(0, 2) + item.time.substring(3, 4)))
                    item.type === 3 && !bookedSlots.includes(item.time) 
                    && <Button variant="outlined" className={classes.slotItem} key={item.time} value={item.time} color="primary" onClick={(e) => handleBookSlot(e.target.value)} disabled={
                      value === 0 ? Number(date.substring(11, 13)+ date.substring(14, 16)) + 15 < Number(item.time.substring(0, 2) + item.time.substring(3, 5))? false : true  : false
                    }>{item.timeStr}</Button>
                  ))
                }    
              </div>
            </Box>
          </TabPanel>  
        ))
      }
    </div>
  );
}
 export {BookingCard}

