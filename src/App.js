import Courses from './Courses';
import Saturn from './Saturn';
import Mercury from './Mercury';
import Venus from './Venus';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

const client = new ApolloClient({
//    uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2"
      uri: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/superfluid-goerli'
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
        <Saturn />
	<Mercury/>
	<Venus/>
    </div>
  </ApolloProvider>
)

export default App;
