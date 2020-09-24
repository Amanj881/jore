
import React,{useState,useEffect} from 'react';

const ProgressBar = ({fillColor,progress,defaultColor}) => {
const containerStyles = {
    height:8,
    backgroundColor:defaultColor,
    borderRadius:'20px',
  }

const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: fillColor,
    borderRadius: 'inherit',
    transition:'2s ease .5s'
  }
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};

export default ProgressBar;