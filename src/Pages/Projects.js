import React from 'react'

function Projects() {
  return (
    <div style={{backgroundColor:'skyblue'}}>
        <div>
            <img src="https://th.bing.com/th/id/OIP.Xc8U5_Q-sPm7RlKT_bFt6wHaE2?rs=1&pid=ImgDetMain" style={{height:'300px',width:'300px'}}/>
      <br/>restaurant order management system<br/>
      libraries use:<br/>
      react,node.js,express.js,mongodb<br/>
      applications:<br/>
      1.A web page application using react where website gives all information about our restaurant.<br/>
      2.taking order and add them in table<br/>
      3.make a menu cart<br/>
      4.dispaly a simple menu cart page and displaying order name,quantity,price and total bill;<br/>
      5.storing order details in backend database.<br/>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'end'}}>
        currency convertor web application<br/>
        libraries use:<br/>
        react,node.js,express.js,mongodb<br/>
        applications:<br/>
        1.A web page application using react where website gives all information about market.<br/>
          2.In this application we can calculate total money that can be needed to convert from one unit to another.
          <br/> 3.In this we use to fetch api according to api we make our app.<br/>
      </div>
      <div>
        Template Maker:
        <br/>
        libraries use:
        <br/>
        vue,node.js
        <br/>
        applications:<br/>
        1.A web page application using react where website gives all information about template.
        <br/>
             2.select template use template in our project.
             <br/>
             3.select which style we require for our project.
      </div>
    </div>
  )
}

export default Projects
