import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ALBUM_TITLE_FIELD } from "./AlbumTitle";

export const AlbumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="artist" source="artist" />
        <TextField label="coverImage" source="coverImage" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="genre" source="genre" />
        <TextField label="ID" source="id" />
        <TextField label="releaseDate" source="releaseDate" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Song" target="albumId" label="Songs">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
