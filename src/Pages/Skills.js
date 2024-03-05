import React,{useState} from "react";
import {NavLink,Link} from "react-router-dom"
import Layout from "../Components/Layout";
function Skills(){
    return(
        <div>
            This is the form for skills
            <div>
                <ul>
                <NavLink>
                    <li>
                    <Link to='/skill'>
                     Skill
                    </Link>
                    </li>
                    <li>
                    <Link to='/'>
                   Education
                    </Link>
                    <li>
                    <Link to='/proj'>
                   Projects
                    </Link>
                    </li>
                    </li>
                </NavLink>
                </ul>
                <ul>
                    <li>
                        languages<li>
                            c,c++,python,java,dsa
                        </li>
                    </li>
                    <li>
                       web Application
                       <li>
                        react
                       </li>
                       <li>
                        vue
                       </li><li>node.js</li><li>express.js</li><li>
                        mongodb
                       </li>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Skills;