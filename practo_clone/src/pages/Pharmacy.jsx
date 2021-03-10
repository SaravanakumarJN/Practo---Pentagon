import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import styles from "./Pharmacy.module.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom"


const Pharmacy = () => {

    return (
        <>
        <div className={styles.top}>
        <div className={styles.topCont}>
             <TextField  variant="outlined" placeholder="Search for medicines, healthporducts and more.."  
             InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon />
                    </InputAdornment>
                ),
                }}
            style={{width:"50%"}}></TextField>
             <div className={styles.cartButton}>
                <Button variant="contained" color="primary" startIcon={<ShoppingCartIcon/>}>     
                    View Cart
                </Button>
             </div>
        </div>
        </div>
        <div className={styles.mainCont}>
                <h2>Browse medicines & health products</h2>
                <p>Categories</p>
                <div className={styles.categories}> 
                    <Link to="/pharmacy/categories/diabetes" className={styles.categories_card}>
                        <div >
                            <img src="//www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-1.6befede3.png" alt="diabetes"/>
                        </div>
                    </Link>
                    <Link to="/pharmacy/categories/heart" className={styles.categories_card}>
                        <div >
                            <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-2.bcd2bdc9.png" alt="heart"/>
                        </div>
                    </Link>
                    <Link to="/pharmacy/categories/devices" className={styles.categories_card}>
                        <div>
                            <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-4.c31332e5.png" alt="devices"/>
                        </div>
                    </Link>
                    <Link to="/pharmacy/categories/personal" className={styles.categories_card}>
                        <div>
                            <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-3.faf3a8b9.png" alt="personalcare"/>
                        </div>
                    </Link>
                </div>
        </div>
        </>
    )
}

export {Pharmacy}