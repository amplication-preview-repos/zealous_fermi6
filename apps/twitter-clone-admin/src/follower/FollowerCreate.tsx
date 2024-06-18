import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FollowerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FollowedUser" source="followedUser" />
        <TextInput label="FollowingUser" source="followingUser" />
      </SimpleForm>
    </Create>
  );
};
