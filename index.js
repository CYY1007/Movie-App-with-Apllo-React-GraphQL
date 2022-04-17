import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import client from './apollo';
import { ApolloProvider } from '@apollo/client';

const container = document.getElementById("root");
const root = createRoot(container);


root.render(<ApolloProvider client={client}><App/></ApolloProvider>);
