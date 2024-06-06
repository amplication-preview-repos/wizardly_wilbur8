import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SongTitle } from "../song/SongTitle";

export const AlbumCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="artist" source="artist" />
        <div />
        <TextInput label="genre" source="genre" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <ReferenceArrayInput
          source="songs"
          reference="Song"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SongTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
