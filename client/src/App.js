import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import cover from './images/cover.jpeg';
const App = () => {
  return (
   <Container maxidth="lg">
    <AppBar postion="static" color="inherit">
      <Typography variant="h2" align="center">4-dudes-gaming-reviews</Typography>
      <img src={cover} alt="4-dudes-gaming-reviews" height="60" />
    </AppBar>
   </Container>
  );
}
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Header from './components/Header';


// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-flex-start min-100-vh">
//           <Header />
//           <div className="container">
//             <Routes>
//               <Route 
//                 path="/" 
//                 element={<Home />}
//               />
//               <Route 
//                 path="/login" 
//                 element={<Login />}
//               />
//               <Route 
//                 path="/signup" 
//                 element={<Signup />}
//               />
//               <Route 
//                 path="/me" 
//                 element={<Profile />}
//               />
//               <Route 
//                 path="/profiles/:profileId"
//                 element={<Profile />}
//               />
//             </Routes>
//           </div>
          
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

export default App;
