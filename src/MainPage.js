import './App.css';
import * as React from 'react';
import {Link} from 'react-router-dom';








function MainPage() {
    const [value, setValue] = React.useState(0);

 

    
        return(
            <div className='navigation-bar'>
      
                
                <h3>MainPage</h3>
                
                <Link to="/calculatorPage" className='btn'> CalculatorPage</Link>
                <Link to="/todoPage" className='btn'> ToDoListPage</Link>
                <Link to="/" className='btn'> sign out</Link>
              
               

 </div>

    );
}
export default MainPage;