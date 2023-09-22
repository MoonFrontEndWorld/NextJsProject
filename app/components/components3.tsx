
'use client';
import index from '../styles/index.module.css'
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery, gql } from '@apollo/client';
import client from '../apollo-client';
interface CharacterNameProps {
  characterId: string;
}

const GET_CHARACTER_NAME = gql`
query GetCharacterName($characterId: ID!) {
  character(id: $characterId) {
    name
  }
}
`;
export default  function components1({ characterId }: CharacterNameProps) {
  // let data1={};
  const [data, setData] = useState({}); // 用于跟踪选中的标签
   client.query({
    query: GET_CHARACTER_NAME,
    variables: { characterId },
  }).then((res) => {
    const { loading, error, data } =res;
    // data1=data
    setData(data)
    console.log(loading, error, data,"loading, error, data");
  });


  return (
    <div className={index.con3cont}>
      <div className={index.con3}>
        <Grid container>
          <Grid item xs={12} md={6} container justifyContent="flex-start" style={{ margin: '20px 0' }}>
              <div className={index.con3Top} >
                <p style={{fontSize: '12px',fontFamily:'sans-serif',fontWeight: '400'}}>(FISHING SERIES)</p>
                 <h1 style={{fontSize: '100px',fontFamily:'sans-serif',fontWeight: '400'}}>f - series</h1>
              </div>
          </Grid>
         
          <Grid item xs={12} md={6} container justifyContent="flex-end"  style={{ margin: '20px 0' ,fontStyle:'normal'}}>
            <div className={index.pdiv}>
             <p style={{fontFamily:'sans-serif'}}>F - SERIES  GQL-GET:{data?.character?.name}</p>
             <p style={{  margin: '10px 0 0'}}>WASSP Multibeam finds fish and habitat over a wider area than single-beam systems.</p>
             <p style={{ margin: '20px 0 0' }}>Explore Now</p>
            </div>
          </Grid>
          
        </Grid>
      </div>
    </div>
  )
}
