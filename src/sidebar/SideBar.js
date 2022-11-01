import React from 'react'
import { Avatar } from '@mui/material'
import './SideBar.css';


function SideBar() {
    const recentItem = (topic) => (
        <div className='sideBar__recentItem'>
            <span className='sideBar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sideBar'>
        <div className='sideBar__top'>
            <img src='https://images.unsplash.com/photo-1666837147745-1c9dea9908a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' alt='wallpaper' />
            <Avatar className='sideBar__avatar'/>
            <h2>Aigerim Erkebaeva</h2>
            <h4>erkebaeva@gmail.com</h4>
        </div>

        <div className='sideBar__stats'>
            <div className='sideBar__stat'>
                <p>Who viewed you</p>
                <p className='sideBar__statNumber'>2,543</p>
            </div>
            <div className='sideBar__stat'>
                <p>Views on post</p>
                <p className='sideBar__statNumber'>2,448</p>
            </div>
        </div>

        <div className='sideBar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default SideBar