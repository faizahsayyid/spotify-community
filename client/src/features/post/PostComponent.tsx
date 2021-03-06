import React, { FunctionComponent } from "react";

import { FaEdit, FaTrashAlt, FaPlay, FaRegHeart, FaComment, FaReply} from "react-icons/fa";
import { RiStackFill, RiPlayList2Fill } from "react-icons/ri";
import { BsThreeDots} from "react-icons/bs";
import MusicItem from "../music-item/MusicItem";
import PlayableMusicComponent from "./PlayableMusicComponent";


export interface SongInfo {
    name : string
    albumCoverPath: string
    artistName: string

}

interface PostComponentProps {
    username: string
    profilePath: string
    authorCaption: string
    song: SongInfo
    editAndDelete: boolean



}





/*

    Example PostComponent:

     <PostComponent username="McLovin" profilePath="/2357380.jpg" authorCaption="I never lie, including about my age" song={{
        albumCoverPath: "/final1.png",
        name: "The Man Who Never Lied",
        artistName: "Maroon 5"
      }}/>





*/







//PostComponent Feature
//TODO: 
// Figure out how to contrain comment data structure in the props of this component
// Figure out how to expand PostComponent to show comments
// Button Handling for all buttons

function PostComponent(prop: PostComponentProps) {

    return (
        <div className= "flex flex-col h-[346px] w-[600px] bg-[#334155] rounded-lg">

            <div className="flex justify-between items-center h-[75px]" >

                <div className="flex ">
                    <img src={prop.profilePath} className= "rounded-full w-[45px] h-[45px] ml-5"/>
                    <h3 className = " flex text-[15px] text-[#FEFCE8] ml-3 items-center font-bold">{prop.username}</h3>

                </div>

                <div>
                    {prop.editAndDelete
                       ? 
                       
                       <div>
                       <button> <FaEdit className="text-green-500 mr-5 h-[20px] w-[20px]"></FaEdit></button>
                       <button><FaTrashAlt className="text-green-500 mr-5 h-[20px] w-[20px]"></FaTrashAlt></button>
                       </div>

                       :
                       
                       <div>
                           <button><BsThreeDots className="text-green-500 mr-5 h-[20px] w-[20px]"></BsThreeDots></button>
                       </div>
        
                    }

                    
                    

                </div>
            </div>

            <div className="bg-[#475569] h-[3px]"></div>

            <div>
                <PlayableMusicComponent name={prop.song.name} artistName={prop.song.artistName} albumCoverPath={prop.song.albumCoverPath}></PlayableMusicComponent>
                
            </div>

            <div className="flex mt-3">
                <button> <FaRegHeart className="text-white ml-5 h-[20px] w-[20px]"></FaRegHeart></button>
                <button><FaComment className="text-white ml-5 h-[20px] w-[20px]"></FaComment></button>
                <button><FaReply className="text-white ml-5 h-[20px] w-[20px]"></FaReply></button>
            </div>

            <div className="flex space-x-2 ml-5 mt-5">
                <h3 className="text-white font-bold text-[16px]">{prop.username}</h3>
                <h3 className="text-white text-[15px]">{prop.authorCaption} </h3>
    
            </div>

            <div className="ml-5 mt-2">
                <button>
                    <h3 className="text-[#94A3B8] text-[15px]"> View all 10 comments</h3>
                </button>
            </div>

            <div className="ml-5 mt-2">
                <h3 className="text-[#94A3B8] text-[10px]"> 10 hours ago</h3>
            </div>

            
        </div>
    );



}




export default PostComponent; 

