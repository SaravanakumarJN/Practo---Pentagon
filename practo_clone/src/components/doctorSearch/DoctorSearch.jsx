import React from 'react'
import { SearchBar } from '../searchBar/SearchBar'
import styles from './DoctorSearch.module.css'

const DoctorSearch = () => {
    return (
        <div className = {styles.container}>
            <div className = {styles.banner}>
                <div className = {styles.heading1}>Your home for health</div>
                <div className = {styles.heading2}>Find and Book</div>
                <div className = {styles.search}>
                    <SearchBar/>
                </div>
            </div>
        </div>
    )
}

export {DoctorSearch}
