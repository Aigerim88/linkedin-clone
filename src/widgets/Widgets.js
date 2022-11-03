import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is back", "Top news - 9099 readers")}
      {newsArticle("Coronavirus", "Top news - 888 readers")}
      {newsArticle("Tesla hits new highs", "Cars and auto - 300 readers")}
      {newsArticle("Is Redux too good?", "Top news - 6852 readers")}
      {newsArticle("Is Redux too good?", "Top news - 6852 readers")}
      {newsArticle("Is Redux too good?", "Top news - 6852 readers")}
      {newsArticle("Is Redux too good?", "Top news - 6852 readers")}
    </div>
  )
}

export default Widgets