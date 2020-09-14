import React from 'react';
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return(
           <div>
               <div>
                   <img src={confLogo} alt="Logo conferencia"/>
               </div>

               <div>
                   <img src="" alt="Avatar"/>
                   <h1>Angie <br/> Cruz</h1>
               </div>

               <div>
                   <p>Frontend Student</p>
                   <p>@nn</p>
               </div>
           </div>
        )
    }
}

export default Badge;