import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SongTitle } from "../song/SongTitle";

export const LyricsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="song.id" reference="Song" label="song">
          <SelectInput optionText={SongTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
