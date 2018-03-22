/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiUtils from '../utils/ApiUtils';
import fetch from 'node-fetch';

export default function RegisterHandlers (props) {
    fetch('http://api.quizzetoile.fr/api/players', {
        method: 'POST',
        body: JSON.stringify({
            username: props.value
        }),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(json => json);
        
}
