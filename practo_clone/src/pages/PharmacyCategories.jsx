import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import styles from "./PharmacyCategories.module.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PharmacyCategories = () => {
    return (
        <div>
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
            <div className={styles.navbar}>
            <div className={styles.navbar__cont}>
                    <div className={styles.menu}>
                        <Link to="/" className={styles.menu__link}>
                            Family Care <ExpandMoreIcon/>
                        </Link>
                        <div className={styles.dropdown_content}>
                            <Link to="/genres" className={styles.dropdown_link}>
                            Senior Care
                            </Link>
                            <br />
                            <Link to="#" className={styles.dropdown_link}>
                            Women's Care
                            </Link>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <Link to="/mybooks" className={styles.menu__link}>
                            Fitness & Wellness <ExpandMoreIcon/>
                        </Link>
                        <div className={styles.dropdown_content}>
                            <Link to="/genres" className={styles.dropdown_link}>
                                Protein Supplements
                            </Link>
                            <br />
                            <Link to="#" className={styles.dropdown_link}>
                                Mass Gainers
                            </Link>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <Link to="#" className={styles.menu__link}>
                            Skin Care <ExpandMoreIcon/>
                        </Link>
                        <div className={styles.dropdown_content}>
                            <Link to="/genres" className={styles.dropdown_link}>
                                Acne Care
                            </Link>
                            <br />
                            <Link to="#" className={styles.dropdown_link}>
                                Body & Bath
                            </Link>
                            <br />
                            <Link to="#" className={styles.dropdown_link}>
                                Facewash Clensers
                            </Link>
                            <br />
                            <Link to="#" className={styles.dropdown_link}>
                                Skin Care Supplements
                            </Link>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <Link to="#" className={styles.menu__link}>
                            Hair Care <ExpandMoreIcon/>
                        </Link>
                        <div className={styles.dropdown_content}>
                            <Link to="/genres" className={styles.dropdown_link}>
                                Antidandruff
                            </Link>
                            <br />
                            <Link to="#" className={styles.dropdown_link}>
                                Antihairloss
                            </Link>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <Link to="#" className={styles.menu__link}>
                            Lip Care <ExpandMoreIcon/>
                        </Link>
                        <div className={styles.dropdown_content}>
                            <Link to="/genres" className={styles.dropdown_link}>
                                Lip Balm
                            </Link>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <Link to="#" className={styles.menu__link}>
                            Women's Care <ExpandMoreIcon/>
                        </Link>
                        <div className={styles.dropdown_content}>
                            <Link to="/genres" className={styles.dropdown_link}>
                                Feminine Hygiene
                            </Link>
                            <br />
                            <Link to="#" className={styles.dropdown_link}>
                            Mother's Care
                            </Link>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <Link to="#" className={styles.menu__link}>
                            Baby Care <ExpandMoreIcon/>
                        </Link>
                        <div className={styles.dropdown_content}>
                            <Link to="/genres" className={styles.dropdown_link}>
                                Baby Bath
                            </Link>
                            <br />
                            <Link to="#" className={styles.dropdown_link}>
                                Diapers & wipes
                            </Link>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <Link to="#" className={styles.menu__link}>
                            Instruments <ExpandMoreIcon/>
                        </Link>
                        <div className={styles.dropdown_content}>
                            <Link to="/genres" className={styles.dropdown_link}>
                                Diabetes
                            </Link>
                            <br />
                            <Link to="#" className={styles.dropdown_link}>
                                Blood Pressures
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {PharmacyCategories}
