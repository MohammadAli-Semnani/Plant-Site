import React from 'react';
import styles from "SearchBar.module.css"



const SearchBar = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>
                    Hi! How Can We Help You?
                </h1>
                <div className={styles.searchContainer}>
                    <input />
                    
                </div>
                
            </div>   
        </>
    );
};

export default SearchBar;