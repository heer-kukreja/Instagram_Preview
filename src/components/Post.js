import React, { useState } from 'react'
import Card from "@mui/material/Card";
import PostDetails from './PostDetails';
import CardMedia from "@mui/material/CardMedia";
import Preview from './Preview';
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const styles = {
  container: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    padding: "2rem",
  },
  wrapper: {
    borderColor: 'black',
    borderWeight: 'thick'
  },
  details: {
    padding: "2rem",
    fontFamily: `'PT Sans', sans-serif`,
  },
};

function Post({ key, post }) {

    const [preview, setPreview] = useState(false);
    const [postLikes, setPostLikes] = useState(post.likes);

    const handlePreview = () => {
        if(!preview)
            setPreview(!preview);
    };

    const handleClose = () => {
        if (preview) setPreview(!preview);
    }

    const handleLike = () => {
        setPostLikes(postLikes + 1);
    }



  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <Card sx={{ width: 450 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "gray" }} aria-label="user">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={`user_` + Math.floor(1000 + Math.random() * 9000)}
          />
          <CardMedia
            component="img"
            image={post.Image}
            alt="user post"
            height="350"
            backgroundColor="#efefef"
            sx={{ objectFit: "fill" }}
            onClick={ handlePreview }
          />
          <div style={styles.details}>
            <PostDetails likes={postLikes} timestamp={post.timestamp} />
          </div>
        </Card>
      </div>

      {preview && (
        <Preview
          post={post}
          handleClose={handleClose}
          handleLike={handleLike}
          postLikes={postLikes}
        />
      )}
    </div>
  );
}

export default Post