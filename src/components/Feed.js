import React from 'react'
import Post from './Post';
import useFetch from "../useFetch";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    padding: "5rem",
  },
  status: {
    fontSize: "2rem",
  },
  posts: {
    padding: '0.5rem',
    flexDirection: 'column',
  },
};

const { REACT_APP_API_URL } = process.env;

function Feed() {

    const {
      data: posts,
      error,
      isLoading,
    } = useFetch(REACT_APP_API_URL); 


  return (
    <div style={styles.container}>

      <div style={styles.status}>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
      </div>

      <div style={styles.posts}>
        {posts && posts.sort((post1, post2) => post1.likes - post2.likes).map((post) => <Post key={ post.likes } post={post} />)}
      </div>

    </div>
  );
}

export default Feed