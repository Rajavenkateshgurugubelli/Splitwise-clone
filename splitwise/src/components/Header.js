import React from "react";
import mainLogo from "../images/mainLogo.png"
import userPhoto from"../images/userPhoto.jpg"

const Header=()=>{

return(
 <>  
   <nav>
        <span style={{ display: "flex",backgroundColor:"rgb(91, 197, 167)" , justifyContent: "space-between"}}>
            <span style={{ display: "flex",alignItems: "center", padding:"20px"}}>
             <img src={mainLogo} height="40x40" alt="Split wise logo"></img> 
              <h1>Splitwise</h1>
            </span>
            <span style={{ display: "flex",alignItems: "center",padding:"20px"}}>
                <img src={userPhoto} height="40x40" alt="user profile pic"></img>
             <h3>Raja Venkatesh Gurugubeli</h3>
           </span>
         </span>

   </nav>
 </>
);
}


export default Header;