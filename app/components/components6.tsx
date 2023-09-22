
'use client';
import Image from 'next/image'
import index from '../styles/index.module.css'
import React from 'react';
import Imglist from './imglist';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const tags = [
  { index:'/03.jpg',dec:'South Pacific reopens for superyachts, a top charter spot.'},
  { index:'/04.jpg',dec:'WASSP’s Bluebeam brings major feature advancements'},
  ];
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
    <div className={index.imgbox}>
      <div className={index.con4}>
        <Grid container>
          <Grid item xs={1} md={2} container justifyContent="flex-start" style={{ margin: '20px 0' }}>
                <div style={{fontSize: '12px',fontWeight: '400'}}>
                  05
                </div>
          </Grid>
          <Grid item xs={5} md={3} container justifyContent="flex-start" style={{ margin: '20px 0' }}>
              <div style={{fontSize: '12px',fontWeight: '400'}}>
              LATEST NEWS
              </div>
          </Grid>
          <Grid item xs={12} md={7} container justifyContent="center"   style={{ margin: '20px 0', display:'flex', flexWrap:'noWrap'}}>
            {tags.map((tag, i) => (
               <div className={`${index.con4boxBorder} ${i==1 ? classes.hiddenOnMobile : '' }`} >

                 <div key={i}  >
                    <Image
                      src={tag.index}
                      alt="Picture of the author"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: '100%',fontSize: '0'}}
                    />
                </div>
                <h4  style={{ fontSize: '24px',fontFamily:'sans-serif',margin: '20px 0',fontWeight: '300'}}>{tag.dec}</h4>
                <div className={index.con4fott}>
                  <span style={{ fontSize: '12px',fontFamily:'sans-serif'}}>View</span>
                  <Image
                      src='/ArrowRight.svg'
                      alt="Picture of the author"
                      width={20}
                      height={20}
                    />
                </div>
               </div>
              ))}
          </Grid>
          
        </Grid>
      </div>
      <Imglist  ></Imglist>
    </div>
  )
}
