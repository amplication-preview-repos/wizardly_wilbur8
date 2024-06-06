import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AlbumTitle } from "../album/AlbumTitle";
import { LyricsTitle } from "../lyrics/LyricsTitle";
import { StreamTitle } from "../stream/StreamTitle";

export const SongCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="album.id" reference="Album" label="album">
          <SelectInput optionText={AlbumTitle} />
        </ReferenceInput>
        <TextInput label="artist" source="artist" />
        <NumberInput step={1} label="duration" source="duration" />
        <div />
        <TextInput label="genre" source="genre" />
        <ReferenceArrayInput
          source="lyricsItems"
          reference="Lyrics"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LyricsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="streams"
          reference="Stream"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StreamTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
