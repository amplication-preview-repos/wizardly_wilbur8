import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AlbumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Albums"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="artist" source="artist" />
        <TextField label="coverImage" source="coverImage" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="genre" source="genre" />
        <TextField label="ID" source="id" />
        <TextField label="releaseDate" source="releaseDate" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
