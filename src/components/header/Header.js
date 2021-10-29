import { TextField } from '@material-ui/core';
import React from 'react'
import './Header.css';

export const Header = () => {
    return (
        <div className="header">
            <span className="title">Vocab</span>
            <TextField id="standrd-basic" label="search"></TextField>
        </div>
    )
}
