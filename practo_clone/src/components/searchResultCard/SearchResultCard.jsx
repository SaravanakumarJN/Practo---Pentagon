import React from 'react'
import styles from './SearchResultCard.module.css'

const SearchResultCard = ({data, onClick}) => {
    return (
        <div className = {styles.card} onClick = {() => onClick(data.id)}>
            <div className = {styles.left}>
                <img
                    src = {data.image_url}
                    alt = "avatar"
                />
            </div>
            <div className = {styles.right}>
                <div className = {styles.name}>{data.name}</div>
                <div className = {styles.spec}>{data.specialization}</div>
            </div>
        </div>
    )
}

export {SearchResultCard}
