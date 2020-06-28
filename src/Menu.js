// import React, { Component } from 'react'
// import './Menu.css';
// import {Link} from 'react-router-dom'
// class Menu extends Component{
//     render()
//     {
//         return(<div className='menustyle'>
//                    <ul>
//                           <li><Link to='Home'>home</Link></li>
//                           <li><Link to='About'>about</Link></li>
//                           <li><Link to='Contact'>contact</Link></li>
//                    </ul>
//         </div>)
//     }
// }
// export default Menu;


import React, { Component } from 'react'
import './Menu.css';
import {Link} from 'react-router-dom'
class Menu extends Component{
    render()
    {
        return(<>
                 <div className='menustyle'>
                 <ul>
                       <li><Link to='/'>home</Link></li>
                       <li><Link to='About'>about</Link></li>
                       <li><Link to='Contact'>contact</Link></li>
                 </ul>
                 </div>
        </>)
    }
}
export default Menu;