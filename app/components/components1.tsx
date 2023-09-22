
'use client';
import Image from 'next/image'
import index from '../styles/index.module.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  hiddenOnMobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none', // 在小屏幕上隐藏
    },
    [theme.breakpoints.up('md')]: {
      display: 'block', // 在中等屏幕尺寸以上展示
    },
  },
}));

export default function components1() {
  const classes = useStyles();

  return (
    <div className={index.leftContent} >
      <div className={index.menu}>
        <img src="/Logo.svg" alt="Logo SVG" />
        <div className={index.nav}>
          <span>SEARCH</span>
          <span>LOGIN</span>
           {/* 在手机上隐藏，PC上展示的 span */}
          <span className={classes.hiddenOnMobile}>EN<img src="/ArrowDown.svg" alt="Logo SVG" /></span>
          <img src="/Menu.svg" alt="Logo SVG" />
        </div>
      </div>
      {/* <Image
        src="/01.jpg"
        alt="Picture of the author"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      /> */}
      <div  style={{ position:'absolute',top:'30%',left:'30px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div className="custom-div">
              <span> Sea it all</span>
              <b>MULTIBEAM SONAR PRODUCTS & SOLUTIONS.</b>
            </div>
          </Grid>
        </Grid>
      </div>
      
      <div className={index.con1Foooter}>
        <Grid container>
        <Grid item xs={12} md={5} container justifyContent="center">
            <div className="div1">
            </div>
          </Grid>
          <Grid item xs={12} md={2} container justifyContent="center">
            <div className="div1" style={{fontSize: '10px',fontFamily:'sans-serif',fontWeight: '400'}}>
              WASSP multi-beam enables sustainable fishing, exploration, and surveys with versatility and detail.
            </div>
          </Grid>
          <Grid item xs={12} md={5} container justifyContent="flex-end">
              <div className={index.div2} style={{fontSize: '10px',fontFamily:'sans-serif',fontWeight: '400'}}>
              Contact Us
              <Image
                      src='/ArrowRight.svg'
                      alt="Picture of the author"
                      width={30}
                      height={30}
                      style={{ marginLeft:'10px'}}
                    />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
