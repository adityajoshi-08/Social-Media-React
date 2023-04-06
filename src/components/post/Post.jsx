import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './post.css'
import { Users } from "../../dummyData"

export default function Post(props) {
    // console.log(props.post)
    const user = Users.filter(u=>u.id===1);
    console.log(user)

    const [like,setLike] = React.useState(props.post.like)
    const [isLiked,setIsLiked] = React.useState(false)

    function incrementLike(){
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u => u.id === props.post.userId)[0].profilePicture} alt="" className='postProfileImg' />
                    <span className="postUsername">{Users.filter(u => u.id === props.post.userId)[0].username}</span>
                    <span className="postDate">{props.post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                {props.post.desc && <span className="postText">{props.post.desc}</span>}
                <img src={props.post.photo} alt="" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" className='likeIcon' onClick={incrementLike}/>
                    <img src="assets/heart.png" alt="" className='likeIcon' onClick={incrementLike}/>
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{props.post.comment} comment{props.post.comment >1 ? "s" : ""}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
