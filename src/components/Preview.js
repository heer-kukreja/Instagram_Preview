import React from 'react'
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import PostDetails from "./PostDetails";
import CardMedia from "@mui/material/CardMedia";
import CloseIcon from "@mui/icons-material/Close";

const styles = {
  container: {
    position: "fixed",
    alignItems: 'center',
    justifyContent: 'center',
    top: '5rem',
    bottom: '0',
    right: '0',
    background: "rgba(49,49,49,0.8)",
    padding: "3rem",
  },
  contents: {
    paddingBottom: '3rem',
    marginTop: '-2rem'
  },
  details: {
    padding: "1rem",
    fontFamily: `'PT Sans', sans-serif`,
  },
};

function Preview({ post, handleClose, handleLike, postLikes }) {
  
  return (
    <div style={styles.container}>
      <IconButton aria-label="close" sx={{ marginLeft: "38rem" }}>
        <CloseIcon sx={{ color: "white", marginTop: '-5rem' }} onClick={ handleClose } />
      </IconButton>

      <div style={styles.contents}>
        <Card sx={{ maxWidth: 650 }}>
          <CardMedia
            component="img"
            height="400rem"
            width="100%"
            image={post.Image}
            alt="user post"
            backgroundColor="#efefef"
          />
          <div style={styles.details}>
            <IconButton aria-label="like">
              <FavoriteIcon onClick={ handleLike } sx={{
                  width: '2rem',
                  height: '2rem',
                  color: 'red'
              }}/>
            </IconButton>
            <PostDetails likes={ postLikes } timestamp={post.timestamp} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Preview