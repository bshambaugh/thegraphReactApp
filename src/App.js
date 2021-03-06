import Courses from './Courses';
import Saturn from './Saturn';
import Mercury from './Mercury';
import Venus from './Venus';
import Jupiter from './Jupiter';
import Uranus from './Uranus';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

const client = new ApolloClient({
//    uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2"
      uri: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/superfluid-goerli'
//      uri: 'https://thegraph.com/explorer/subgraph/superfluid-finance/superfluid-rinkeby'
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
        <Saturn />
        <Jupiter/>
	<Uranus />
    </div>
  </ApolloProvider>
)

export default App;
