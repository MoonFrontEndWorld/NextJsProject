
'use client';
import Image from 'next/image'
import index from '../styles/index.module.css'
import React from 'react';
import Grid from '@material-ui/core/Grid';

const tags = [
 {name:'Home'},
 {name:'Products'},
 {name:'ENLMultibeam Technology'},
 {name:'News'},
 {name:'Contact'},
 {name:''},
 {name:'Facebook'},
 {name:'Instagram'},
 {name:'Youtube'},
 {name:'Offices'},
 {name:'Auckland-NZ'},
 {name:'Essex-UK'},
  ];
// 02023 WASSP
export default function components1() {

  return (
    <div className={index.imgbox} style={{ height:'1000px' ,paddingTop:'120px' }}>
      <div className={index.con7}>
        <Grid container>
          <Grid item xs={12} md={6} container justifyContent="flex-start" style={{ margin: '20px 0', WebkitFlexDirection:"column" }}>
              <div style={{fontSize: '24px',fontFamily:'sans-serif',fontWeight: '400',marginBottom:'56px'}}>
              Dui duis facilisis id et ullamcorper <br/> diam est. Vulputate ac magna in id.
              </div>
              <div className='div2 btn'  style={{fontSize: '10px',fontFamily:'sans-serif',fontWeight: '400', width:'180px',whiteSpace:'nowrap'}}>
                Contact Us
                <Image
                        src='/ArrowRight.svg'
                        alt="Picture of the author"
                        width={30}
                        height={30}
                        style={{ marginLeft:'10px'}}
                      />
              </div>
              <p style={{fontSize: '16px',fontFamily:'sans-serif',fontWeight: '400',marginTop:'84px'}} >Subscribe to our newsletter</p>
          </Grid>
          <Grid item xs={12} md={6} container   style={{ margin: '20px 0', display:'flex', flexWrap:'noWrap'}}>
            <div className={index.con7foot}>
              {tags.map((tag, i) => (
                <span key={i} style={{fontSize: '16px',fontFamily:'sans-serif',fontWeight: '400'}} >
                   {tag.name}
                </span>
              ))}
            </div>
          </Grid>
          
        </Grid>
      </div>
      <Image
        src="/WasspMultibeam.svg"
        alt="Picture of the author"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '80%',left:'10%', height: '132px',fontSize: '0',position:'absolute',bottom: '60px'}}
      />
    </div>
  )
}
