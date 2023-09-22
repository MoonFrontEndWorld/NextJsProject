import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import itemData from './itemData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'absolute',
      bottom: '0px',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    //   backgroundColor: '',
    },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      marginLeft:'10px'
    },
    imageListItem:{
        marginLeft:'10px'
    },
    img:{
      width:'100px',
      height:'100px',
    }
  }),
);

const itemData = [
    {
      img: '/05.jpg',
      title: 'Image',
      author: 'author',
    },
    {
     img: '/06.jpg',
     title: 'Image',
     author: 'author',
    },
    {
     img: '/07.jpg',
     title: 'Image',
     author: 'author',
    },
    {
     img: '/08.jpg',
     title: 'Image',
     author: 'author',
    },
    {
     img: '/09.jpg',
     title: 'Image',
     author: 'author',
    },
    {
     img: '/10.jpg',
     title: 'Image',
     author: 'author',
    },
    {
     img: '/11.jpg',
     title: 'Image',
     author: 'author',
    },
  ];
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={7.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} className={classes.imageListItem} >
            <img src={item.img} alt={item.title}  className={classes.img} />
            {/* <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            /> */}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
