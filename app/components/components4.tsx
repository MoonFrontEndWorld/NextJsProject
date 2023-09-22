
'use client';
import Image from 'next/image'
import index from '../styles/index.module.css'
import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const tags = [
  { index:'01',dec:'High Resolution Chirp Sounder'},
  { index:'02',dec:'High Resolution Chirp Sounder'},
  { index:'03',dec:'High Resolution Chirp Sounder'},
  { index:'04',dec:'High Resolution Chirp Sounder'},
  { index:'05',dec:'High Resolution Chirp Sounder'},
  ];

export default function components1() {
  const [selectedTag, setSelectedTag] = useState(null); // 用于跟踪选中的标签
// 处理标签点击事件
const handleTagClick = (index) => {
  setSelectedTag(index); // 更新选中的标签
};
  return (
    <div className={index.imgbox}>
      <Image
        src="/Layers2.svg"
        alt="Picture of the author"
        width={450}
        height={260}
        style={{ margin: '22% 0 0 20%' }}
      />
      <div className={index.con4}>
        <Grid container>
          <Grid item xs={1} md={2} container justifyContent="flex-start" style={{ margin: '20px 0' }}>
                <div style={{fontSize: '12px',fontWeight: '400'}}>
                  03
                </div>
          </Grid>
          <Grid item xs={5} md={3} container justifyContent="flex-start" style={{ margin: '20px 0' }}>
              <div style={{fontSize: '12px',fontWeight: '400'}}>
                features
              </div>
          </Grid>
          <Grid item xs={12} md={7} container justifyContent="center"  style={{ margin: '20px 0' }}>
            <div className={index.con4Right}>
              <ul>
              {tags.map((tag, i) => (
                <li key={i} 
                className={`${index.libox} ${selectedTag === tag.index ? 'selected' : ''}`} onClick={() => handleTagClick(tag.index)}>
                    <b> {tag.index}</b>
                    <span>{tag.dec}</span>
                </li>
              ))}
              </ul>
              <b>08</b>
              <h3>Multiple </h3>
              <h3>WASSP Transducers </h3>
              <p style={{ margin: '0 0 20px' }}> Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.</p>
            
            </div>
          </Grid>
          
        </Grid>
      </div>
    </div>
  )
}
