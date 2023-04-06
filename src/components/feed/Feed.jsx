import React from 'react'
import Share from './../share/Share'
import "./Feed.css"
import Post from './../post/Post'
import { Posts } from "../../dummyData"

export default function Feed() {
  return (
    <div className='feed'>
        <div className="feedWrapper">
            <Share />
            { Posts.map((p) =>(
              <Post key={p.id} post={p} />
            )) }
        </div>
    </div>
  )
}

// 1 2 3 4 5