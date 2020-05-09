import React from 'react'
import axios from 'axios'
import { ApolloConsumer, useMutation } from 'react-apollo'
import ApolloClient from 'apollo-client'
import { getUploadUrlQuery } from '../../graphql/query/getUploadUrl'
import { HesabimView } from './HesabimView'
import { EDIT_USER_PROFILE } from '../../graphql/mutation/editUserProfile'
import { EditUserProfile } from '../../graphql/generated/EditUserProfile'
import {
  GetUploadUrlQuery,
  GetUploadUrlQueryVariables,
} from '../../graphql/generated/GetUploadUrlQuery'

interface Props {}

export interface EditUserProfileVariables {
  profileImageKey?: string
  username?: string
  location?: string
  gender?: string
  occupation?: string
}
const ProfileContainer: React.FunctionComponent<Props> = ({}) => {
  const [editUserProfile] = useMutation<EditUserProfile, EditUserProfileVariables>(
    EDIT_USER_PROFILE
  )

  const onSubmit = (client: ApolloClient<any>) => async (
    variables: EditUserProfileVariables,
    profileImage: File | null
  ) => {
    if (Object.keys(variables).length || profileImage) {
      if (profileImage) {
        const {
          data: { getUploadUrl },
        } = await client.query<GetUploadUrlQuery, GetUploadUrlQueryVariables>({
          query: getUploadUrlQuery,
          variables: {
            contentType: profileImage.type,
            extension: profileImage.name.split('.')[1],
          },
        })

        await axios.put(getUploadUrl.uploadUrl, profileImage)
        variables.profileImageKey = getUploadUrl.uploadKey
      }
      return editUserProfile({ variables })
    }
  }

  return (
    <ApolloConsumer>{client => <HesabimView onSubmit={onSubmit(client)} />}</ApolloConsumer>
  )
}

export default ProfileContainer
