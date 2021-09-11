import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { GetUsersQuery, User } from './generated/graphql'
//import GET_USERS from './graphql/queries/GET_USERS'

const GET_USERS = gql`
    query GetUsers {
        users {
            __typename
            firstname
            lastname
            email
        }
    }
`

function App() {
    const { data, loading, error } = useQuery<GetUsersQuery>(GET_USERS)
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{`Error...${error}`}</h1>
    console.log(data)
    return (
        <div className="App">
            <h1>abcd..</h1>

            {data &&
                data.users.map((item: any) => (
                    <div key={item.email}>
                        <h3>{item.firstname}</h3>
                        <p>{item.email}</p>
                    </div>
                ))}
        </div>
    )
}

export default App
