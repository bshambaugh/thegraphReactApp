import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Courses = () =>  (
     <Query query={gql`
         {
           pairs {
             id
               token0 {
                  totalSupply
		  tradeVolume
		  name
               }
           }
         }
    `}
    >
       {({loading,error,data}) => {
          if (loading) return <p>Loading ...</p>;
          if (error) return <p>Error :( </p>;

          return data.pairs.map(({id,token0,totalSupply,tradeVolume,name}) => (
              <div key={id}>
		  <p>{`The id is: ${id}`}</p>
		  <div key={token0}>
		     <p>{`The token name is: ${token0.name}`}</p>
		     <p>{`The total supply is: ${token0.totalSupply}`}</p>
		     <p>{`The trade volume is: ${token0.tradeVolume}`}</p>
		  </div>
              </div>
          ))
       }} 
    </Query>
);

export default Courses;
