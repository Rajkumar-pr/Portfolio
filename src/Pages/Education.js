import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Education() {
  return (
    <div style={{backgroundColor:'red',height:'100vh'}}>
    <div style={{ display:'flex',flexWrap:'wrap',height:'20vh'}}>
        < div>
       <h2>1 to 10 th standard</h2>
       <h3>Sanskar Vidayalaya Beed</h3>
       
       <img src="https://sanskarprabodhini.edu.in/wp-content/uploads/2023/02/310A4408.jpg" style={{height:'200px',width:'200px'}} />
       <p> 10 th percentagepercentage:94%</p>
       </div>
       
       <div >
        <h2>
          11th and 12th standard School
         
        </h2>
        <h3>Shri Bankatswami Mahavidyalaya Beed</h3>
        <img src="https://www.kskcollegebeed.com/sites/default/files/banner/slide-image-5.jpg" style={{height:'200px',width:'200px'}}/>
       <p>12 th Percentage:'84'</p>
       </div>
       <div>
        <h2>JEE Exam Preparation Coaching</h2>
        <p>Allen Kota</p>
  <img src= "https://2.bp.blogspot.com/-rdTgtZESNIA/Wt8v5r-eghI/AAAAAAAAAA8/MrtEcqrHQukwUN93DCo9cRoxfRmCEEx7gCLcBGAs/s1600/FB_IMG_1524547850771.jpg"style={{height:'200px',width:'200px'}}/>
       <h4>JEE Score</h4>
       AIR-9,801 JEE Main
       Qualified JEE Advance
       </div>
<Link to='/skill'>
  <button>press</button>
</Link>
    </div>
    </div>
  )
}

export default Education
