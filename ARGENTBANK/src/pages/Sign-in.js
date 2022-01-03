import React from 'react';
import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from "react-redux";
import {login} from '../features/user'
import { useSelector } from "react-redux";


export default function SignIn() {
  let usernameInput = React.createRef();
  let passwordInput = React.createRef();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)

  return(
        <main className="main bg-dark">
          <section className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle} />
            <h1>Sign In</h1>
            <form onSubmit={() => {dispatch(login({email: usernameInput.current.value, password: passwordInput.current.value}))}}>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" 
                  id="username"
                  name="username"
                  required 
                  ref={usernameInput}/>
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password"
                  id="password"
                  name="password"
                  required
                  ref={passwordInput}/>
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me"/>
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button className="sign-in-button">Sign In</button>
            </form>
            <h1>{user.email}</h1>
            <h1>{user.password}</h1>
          </section>
        </main>
  )
}

//  <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Argent Bank - Home Page</title>
//     <link rel="stylesheet" href="./css/main.css" />
//     <link
//       rel="stylesheet"
//       href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
//     />
//   </head>
//   <body>
//     <nav class="main-nav">
//       <a class="main-nav-logo" href="./index.html">
//         <img
//           class="main-nav-logo-image"
//           src="./img/argentBankLogo.png"
//           alt="Argent Bank Logo"
//         />
//         <h1 class="sr-only">Argent Bank</h1>
//       </a>
//       <div>
//         <a class="main-nav-item" href="./sign-in.html">
//           <i class="fa fa-user-circle"></i>
//           Sign In
//         </a>
//       </div>
//     </nav>
//     <main class="main bg-dark">
//       <section class="sign-in-content">
//         <i class="fa fa-user-circle sign-in-icon"></i>
//         <h1>Sign In</h1>
//         <form>
//           <div class="input-wrapper">
//             <label for="username">Username</label
//             ><input type="text" id="username" />
//           </div>
//           <div class="input-wrapper">
//             <label for="password">Password</label
//             ><input type="password" id="password" />
//           </div>
//           <div class="input-remember">
//             <input type="checkbox" id="remember-me" /><label for="remember-me"
//               >Remember me</label
//             >
//           </div>
//           <!-- PLACEHOLDER DUE TO STATIC SITE -->
//           <a href="./user.html" class="sign-in-button">Sign In</a>
//           <!-- SHOULD BE THE BUTTON BELOW -->
//           <!-- <button class="sign-in-button">Sign In</button> -->
//           <!--  -->
//         </form>
//       </section>
//     </main>
//     <footer class="footer">
//       <p class="footer-text">Copyright 2020 Argent Bank</p>
//     </footer>

//     <script></script>
//   </body>
// </html>