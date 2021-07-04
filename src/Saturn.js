import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Courses = () =>  (
     <Query query={gql`
     {
      transactions(first: 5) {
    id
    timestamp
    blockNumber
    events {
      id
    }
  }
  accounts(first: 5) {
    id
    accountWithToken {
      id
    }
    flowsOwned {
      id
    }
    flowsReceived {
      id
    }
	
  }
     }	     
	     
    `}
    >
       {({loading,error,data}) => {
          if (loading) return <p>Loading ...</p>;
          if (error) return <p>Error :( </p>;

          return data.transactions.map(({id}) => (
              <div key={id}>
		  <p>{`The id is: ${id}`}</p>
              </div>
          ))
       }} 
    </Query>
);

export default Courses;
