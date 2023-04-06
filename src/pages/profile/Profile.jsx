import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./profile.css"
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

export default function Profile() {
  return (
     <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                    <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Aditya Joshi</h4>
                    <span className="profileInfoDesc">Hey I'm Aditya</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/> 
            </div>
          </div>
        </div>
    </>
  )
}
