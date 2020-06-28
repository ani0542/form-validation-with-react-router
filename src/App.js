// import React, { Component } from 'react'
// import Menu from './Menu';
// import Home from './Home'
// import About from './About';
// import Contact from './Contact';
// import {BrowserRouter,Route,Switch} from 'react-router-dom'
// class App extends Component{
//     render()
//     {
//         return(
//                   <BrowserRouter>
//                                         <div>
//                                               <Menu/>
//                                               <Switch>
//                                               <Route path='/home' component={Home}/>
//                                                 <Route path='/about' component={About}/>
                                                
//                                                 <Route path='/contact' component={Contact}/>
//                                               </Switch>
//                                         </div>

//                   </BrowserRouter>
//         )
//     }
// }
// export default App;

import React, { Component } from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact'
import About from './About.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends Component{
    render()
    {
        return(<BrowserRouter><>
                  <Menu/>
                  <Switch>
                  <Route path ='/' exact component={Home}/>
                  <Route path ='/about' component={About}/>
                  <Route path ='/contact' component={Contact}/>
                  </Switch>
        </></BrowserRouter>)
    }
}


export default App;