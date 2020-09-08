import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';
import Demolist from './Demolist';
import 'tachyons';

const Demo = () => {
    return (<div className="container tc">
        <h3>Lorem ipsum dolor sit amet</h3>
            <Demolist id="1" name="Mahim" work="React Developer"/>
            <Demolist id="1" name="Rongon" work="Laravel Developer"/>
            <Demolist id="1" name="Rabbi" work="Jquery Developer"/>
            <Demolist id="1" name="Prabir" work="JS Developer"/>
        </div>
    )
}


export default Demo;