import React from 'react'
import './CommentList.css'
import Comment from '../Comment/Comment';

const CommentList = () => {
    const commentsData = [
  {
    username: "kartavya_sharma",
    comment: "This project looks amazing! Great work 🔥",
    count: 12,
    userProfile: "https://example.com/profiles/kartavya.jpg"
  },
  {
    username: "john_doe",
    comment: "Can you share the GitHub link?",
    count: 5,
    userProfile: "https://example.com/profiles/john.jpg"
  },
  {
    username: "sneha_dev",
    comment: "Loved the UI design, very clean and modern!",
    count: 9,
    userProfile: "https://example.com/profiles/sneha.png"
  },
  {
    username: "tech_guru",
    comment: "Try optimizing your API calls, it’ll improve performance. ",
    count: 4,
    userProfile: "https://example.com/profiles/techguru.png"
  }
];

  return (
    <div className='comment-list-view'>
        {
            commentsData.map((comment, ind)=><Comment username={comment.username} comment={comment.comment} count={comment.count} userProfile={comment.userProfile}/>)
        }
    </div>
  )
}

export default CommentList