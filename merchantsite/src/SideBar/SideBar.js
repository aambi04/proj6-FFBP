import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import './SideBar.css';

const SideBarStyle = styled(Box)`
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
`;

export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar"> Side </div>
        );
    }
};
