// An example layout of a mutation

import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation EmptyMutation($input: someInput) {

  }
`

export default () => {
  const variables = {

  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        callback()
      },
      onError: err = console.error(err),
    },
  )
}
