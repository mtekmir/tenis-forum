import { LOGOUT } from '../../graphql/mutation/logout'
import { useRouter } from 'next/router'
import { useMutation, withApollo } from 'react-apollo'
import { useEffect } from 'react'
import { ApolloClient } from 'apollo-boost'

interface Props {
  client: ApolloClient<any>
}

const Logout: React.FC<Props> = ({ client }) => {
  const { replace } = useRouter()
  const [logout] = useMutation(LOGOUT)
  useEffect(() => {
    logout()
    client.resetStore()
    replace('/')
  }, [])
  return null
}

export default withApollo(Logout)
