import "./closeFriend.css"
import React from 'react'

export default function CloseFriend(props) {
  return (
    <li className="sidebarFriend">
            <img src={props.user.profilePicture} alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">{props.user.username}</span>
    </li>
  )
}
