/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiUtils from '../utils/ApiUtils';
export default function RegisterHandlers (props) {
    const Api = (url, opt) => {
        return fetch(url, opt)
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch(e => e)
    }
    console.log(props.value)
    const user = Api('http://api.quizzetoile.fr/api/players', {
        method: 'POST',
        body: JSON.stringify({
            "username": props.value,
        })
    });

    console.log(user);

    return true;
}
