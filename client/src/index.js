// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';



// const queryClient = new QueryClient();

// ReactDOM.render(
//    <QueryClientProvider client={queryClient}>
//        <App />
//        <ReactQueryDevtools initialIsOpen={false}/>
//    </QueryClientProvider>,
//    document.getElementById("root")
// );

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>,
  document.getElementById("root")
);



