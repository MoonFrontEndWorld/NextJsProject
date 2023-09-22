
'use client';
import Image from 'next/image'
import index from '../styles/index.module.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useSpring, animated } from 'react-spring';

export default function components1() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const handleMouseMove = (e: Event) => {
    // 计算鼠标的相对位移并更新动画
    console.log(e,'sssss');
    
    const { screenX: x, screenY:y } = e;
    console.log(e,'sssss',x, y);
    set({ xy: [x, y] });
  };

  return (
    <div className={index.imgbox} onMouseMove={handleMouseMove}>
      {/* <animated.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(your-background-image.jpg)', // 替换为你的背景图片 URL
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            transform: xy.to((x, y) => `translate(${x}px, ${y}px)`),
          }}
        > */}
          <animated.img
            src="/Layers2.svg"
            alt="Picture of the author"
            width={450}
            height={260}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              transform: xy.to((x, y) => `translate(${x}px, ${y}px)`),
            }}
          />
        {/* </animated.div> */}
      
      <div className={index.con4}>
        <Grid container>
          <Grid item xs={1} md={2} container justifyContent="flex-start" style={{ margin: '20px 0' }}>
                <div style={{fontSize: '12px',fontWeight: '400'}}>
                  04
                </div>
          </Grid>
          <Grid item xs={5} md={3} container justifyContent="flex-start" style={{ margin: '20px 0' }}>
              <div style={{fontSize: '12px',fontWeight: '400'}}>
              testimonials
              </div>
          </Grid>
          <Grid item xs={12} md={7} container justifyContent="center"  style={{ margin: '20px 0' }}>
            <div className={index.con4Right}>
              
              <h3 style={{ margin: '0 ' }}>“WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE, GIVING ME A HIGHER CATCH WITH REDUCED FUEL CONSUMPTION.”</h3>
              <p style={{ margin: '20px 0 ' }}> Dominique Faou <br/> Owner/Skipper, Francep</p>
            
            </div>
          </Grid>
          
        </Grid>
      </div>
    </div>
  )
}
