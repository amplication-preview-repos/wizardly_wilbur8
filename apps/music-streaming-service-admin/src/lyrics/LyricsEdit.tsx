import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SongTitle } from "../song/SongTitle";

export const LyricsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="song.id" reference="Song" label="song">
          <SelectInput optionText={SongTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
