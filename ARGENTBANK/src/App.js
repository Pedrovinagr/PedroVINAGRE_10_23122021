import React from 'react'
import { BrowserRouter} from 'react-router-dom'
// import Router from './router/Router'
import Header from './components/Header'
import Footer from './components/Footer'
// import Home from './pages/Home'
import SignIn from './pages/sign-in'
// import User from './pages/user'



function App() {
  return (
    <div className='ArgentBank'>
      <BrowserRouter>
        <Header />
        {/* <Router /> */}
        {/* <Home /> */}
        <SignIn />
        {/* <User /> */}
        <Footer />
      </BrowserRouter>
      </div>
  );
}

export default App;
