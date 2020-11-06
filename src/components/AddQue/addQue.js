// import React,{useState} from "react"
// import './style.css' 
// const AddQue = () => {
//     const [question, setQuestion] = useState("")
//     const [repeatText, setRepeatText] = useState([""])
//     const [text, setText] = useState('')
//     const [buttons, setButtons] = useState(0)
//     const handleQues = (e) =>{
//         e.preventDefault()
//     }
//     const repeatMultipleQ = () => {
//         if (repeatText.length < 4) {
//             setRepeatText((oldData) => {
//                 return [...oldData, ''];
//             });
//         }
//         else {
//             setButtons(1);
//         }
//     };
//     const itemChange = (e) => {
//         setText(e.target.value);
//         let val = e.target.value;
//         let len = repeatText.length;
//         repeatText[len - 1] = val;
//     };
//     const DeleteList = (e) => {
//         setRepeatText((oldData) => {
//             return oldData.filter((currentEle, index) => {
//                 return index !== e;
//             })
//         });
//     };



//     return (
//         <div className = "addingQues">
//             {/* <input type="text" style={{width:"40%", height:"40px"}} value={question} onChange={e => setQuestion(e.target.value)} required/> */}
//             {/* <button className="btn waves-light btn-small teal lighten-10" onClick={()=>handleQues()}>Add Question</button>
//             <br></br>
//             <br></br>
//             <br></br> */}
//             <input type="text" placeholder="Type question here" style={{width:"40%", height:"40px"}} value={question} onChange={e => setQuestion(e.target.value)} required/>
//             {repeatText.map((option, id) => (
//                 <div key={id}>
//                     <p className="answer">
//                     <input type="text" placeholder="Type answer here" value={option} onChange={itemChange} />
//                     <button onClick={repeatMultipleQ} className="btn waves-light btn-small teal lighten-10" ><i className="material-icons">add_circle</i></button>
//                     <button className="btn waves-light btn-small teal lighten-10"
//                         onClick={() => {
//                         DeleteList(id);
//                         }}><i className="material-icons">delete</i></button>
//                     </p>
//                 </div>
//             ))}
//             <button className="btn" onClick={()=>addNext()}>Add Next</button>
//         </div>
//     ) 
// }
// export default AddQue