import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SONG_TITLE_FIELD } from "./SongTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ALBUM_TITLE_FIELD } from "../album/AlbumTitle";

export const SongShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="album" source="album.id" reference="Album">
          <TextField source={ALBUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="artist" source="artist" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="duration" source="duration" />
        <TextField label="file" source="file" />
        <TextField label="genre" source="genre" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Lyrics"
          target="songId"
          label="LyricsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="song" source="song.id" reference="Song">
              <TextField source={SONG_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Stream" target="songId" label="Streams">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="song" source="song.id" reference="Song">
              <TextField source={SONG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
