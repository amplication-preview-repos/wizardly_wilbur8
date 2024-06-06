import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SongList } from "./song/SongList";
import { SongCreate } from "./song/SongCreate";
import { SongEdit } from "./song/SongEdit";
import { SongShow } from "./song/SongShow";
import { AlbumList } from "./album/AlbumList";
import { AlbumCreate } from "./album/AlbumCreate";
import { AlbumEdit } from "./album/AlbumEdit";
import { AlbumShow } from "./album/AlbumShow";
import { LyricsList } from "./lyrics/LyricsList";
import { LyricsCreate } from "./lyrics/LyricsCreate";
import { LyricsEdit } from "./lyrics/LyricsEdit";
import { LyricsShow } from "./lyrics/LyricsShow";
import { StreamList } from "./stream/StreamList";
import { StreamCreate } from "./stream/StreamCreate";
import { StreamEdit } from "./stream/StreamEdit";
import { StreamShow } from "./stream/StreamShow";
import { LibraryList } from "./library/LibraryList";
import { LibraryCreate } from "./library/LibraryCreate";
import { LibraryEdit } from "./library/LibraryEdit";
import { LibraryShow } from "./library/LibraryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MusicStreamingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Song"
          list={SongList}
          edit={SongEdit}
          create={SongCreate}
          show={SongShow}
        />
        <Resource
          name="Album"
          list={AlbumList}
          edit={AlbumEdit}
          create={AlbumCreate}
          show={AlbumShow}
        />
        <Resource
          name="Lyrics"
          list={LyricsList}
          edit={LyricsEdit}
          create={LyricsCreate}
          show={LyricsShow}
        />
        <Resource
          name="Stream"
          list={StreamList}
          edit={StreamEdit}
          create={StreamCreate}
          show={StreamShow}
        />
        <Resource
          name="Library"
          list={LibraryList}
          edit={LibraryEdit}
          create={LibraryCreate}
          show={LibraryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
