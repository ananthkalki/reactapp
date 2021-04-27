import React from 'react';
import Header from './header';
import Footer from './footer';
import Note from './note';

function App (){
 return(
     <div className="app-container">
        <Header />
        <div className="main-section">
            <Note />
            
        </div>
        <Footer />
     </div>
 );
}

export default App;