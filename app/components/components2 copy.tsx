
'use client';
import Image from 'next/image'
import index from '../styles/index.module.css'
import React , { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useScroll, animated,useSpring , config} from "react-spring";

export default function components1() {
  const myElementRef = useRef(null);
  const [scrollVal, setScrollVal] = React.useState(0);
  const bindScroll  = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollVal(scrollYProgress + 1);
    }
  });
  

  // 创建多个动画阶段
  const props1 = useSpring({
      from: { width: '0%', opacity: 0 },
      to: { width: '100%', opacity: 1 },
      config: config.slow,
    });
    useEffect(() => {
      // 在DOM元素上应用useScroll的绑定
      const unbind = bindScroll(myElementRef.current);
  
      return () => {
        unbind();
      };
    }, [bindScroll]);

  return (
    <div className={index.leftContent} style={{width:'100%',height:'960px'}} ref={myElementRef}>
       <animated.div className="pipeline-segment" style={props1}>
        <Image
          src="/Layers.svg"
          alt="Picture of the author"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto',marginTop: '-30%' }}
        />
       </animated.div>
      
      <animated.div
        style={{
          transform: `scale(${scrollVal})`,
        }}
      className={index.con2}>
        <Grid container>
          <Grid item xs={12} md={12} container justifyContent="center">
              <div className="div1" style={{fontSize: '50px',fontFamily:'sans-serif',fontWeight: '400'}}>
                welcome to the world of wassp multibeam
              </div>
          </Grid>
          <Grid item xs={1} md={3} container justifyContent="flex-start" style={{ margin: '20px 0' }}>
              <div style={{fontSize: '10px',fontWeight: '400'}}>
                01
              </div>
          </Grid>
          <Grid item xs={5} md={3} container justifyContent="flex-start" style={{ margin: '20px 0' }}>
              <div style={{fontSize: '10px',fontWeight: '400'}}>
                about wassp
              </div>
          </Grid>
          <Grid item xs={12} md={6} container justifyContent="center"  style={{ margin: '20px 0' }}>
            <div className="div1">
              <p style={{ margin: '0 0 20px' ,fontFamily:'sans-serif'}}>  WASSP, a powerful multi-beam sounder with 120-degree coverage and models for deep exploration, offers unparalleled accuracy, detail, and versatility. Target fish with steerable sounders, generate real-time 3D charts, map fish in water, and make better decisions with the user-friendly advanced mode.</p>
              <div className='div2 btn' style={{fontSize: '12px',fontFamily:'sans-serif',fontWeight: '400'}}>
                Contact Us
                <Image
                      src='/ArrowRight.svg'
                      alt="Picture of the author"
                      width={30}
                      height={30}
                      style={{ marginLeft:'10px'}}
                    />
              </div>
            </div>
          </Grid>
          
        </Grid>
      </animated.div>
    </div>
  )
}
