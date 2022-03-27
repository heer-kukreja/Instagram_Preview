import React from 'react'

const styles = {
    like: {
        padding: '0.2rem'
    },
    time: {
        padding: '0.2rem',
        fontSize: '0.8rem',
        color: 'gray'
    }
}



function PostDetails({ likes, timestamp }) {
  return (
    <div>
        <div style={styles.like}>{likes} likes</div>
        <div style={styles.time}>{timestamp}</div>
    </div>
  )
}

export default PostDetails