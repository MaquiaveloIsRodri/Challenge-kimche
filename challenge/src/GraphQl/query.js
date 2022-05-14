import { gql } from "@apollo/client"
export const ALL_COUNTRY = gql`
    query{
        countries{
          code
          name
          native
          phone
          continent{
            name
          }
          capital
          currency
          languages{
            name
          }
          emoji
        }
      }
`
