import * as React from 'react';
import axios from 'axios';
import { MutationFn, ApolloConsumer } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { getUploadUrlQuery } from '../../graphql/query/getUploadUrl';
import {
  EditUserProfileMutation,
  EditUserProfileVariables,
  EditUserProfileComponent,
} from '../../generated/apolloComponents';
import { HesabimView } from './HesabimView';

interface Props {}
const ProfileContainer: React.FunctionComponent<Props> = ({}) => {
  const onCompleted = async ({ editUserProfile }: EditUserProfileMutation) => {
    if (!editUserProfile.error) {
      // success
    } else {
      // errır
    }
  };

  const onSubmit = (
    mutation: MutationFn<EditUserProfileMutation, EditUserProfileVariables>,
    client: ApolloClient<any>,
  ) => async (
    variables: EditUserProfileVariables,
    profileImage: File | null,
  ) => {
    if (Object.keys(variables).length || profileImage) {
      if (profileImage) {
        const {
          data: { getUploadUrl },
        } = await client.query({
          query: getUploadUrlQuery,
          variables: {
            contentType: profileImage.type,
            extention: profileImage.name.split('.')[1],
          },
        });

        await axios.put(getUploadUrl.uploadUrl, profileImage);
        variables.profileImageKey = getUploadUrl.uploadKey;
      }
      return mutation({ variables });
    }
  };

  return (
    <ApolloConsumer>
      {client => (
        <EditUserProfileComponent onCompleted={onCompleted}>
          {mutation => <HesabimView onSubmit={onSubmit(mutation, client)} />}
        </EditUserProfileComponent>
      )}
    </ApolloConsumer>
  );
};

export default ProfileContainer;
