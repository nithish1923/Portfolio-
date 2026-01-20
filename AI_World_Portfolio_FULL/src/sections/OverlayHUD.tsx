import avatar from "../assets/avatar.png";
export default function OverlayHUD(){
return(<div style={{position:"absolute",top:20,left:20,color:"white"}}>
<img src={avatar} style={{width:60,borderRadius:"50%",border:"2px solid #00eaff"}}/>
<div>Nithish Kondapaka</div>
<div style={{fontSize:12,opacity:0.7}}>AI / ML Engineer · GenAI · RAG · Cloud</div>
</div>);
}
