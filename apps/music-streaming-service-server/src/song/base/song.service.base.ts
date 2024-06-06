/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Song as PrismaSong,
  Lyrics as PrismaLyrics,
  Stream as PrismaStream,
  Album as PrismaAlbum,
} from "@prisma/client";

export class SongServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SongCountArgs, "select">): Promise<number> {
    return this.prisma.song.count(args);
  }

  async songs<T extends Prisma.SongFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SongFindManyArgs>
  ): Promise<PrismaSong[]> {
    return this.prisma.song.findMany<Prisma.SongFindManyArgs>(args);
  }
  async song<T extends Prisma.SongFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SongFindUniqueArgs>
  ): Promise<PrismaSong | null> {
    return this.prisma.song.findUnique(args);
  }
  async createSong<T extends Prisma.SongCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SongCreateArgs>
  ): Promise<PrismaSong> {
    return this.prisma.song.create<T>(args);
  }
  async updateSong<T extends Prisma.SongUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SongUpdateArgs>
  ): Promise<PrismaSong> {
    return this.prisma.song.update<T>(args);
  }
  async deleteSong<T extends Prisma.SongDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SongDeleteArgs>
  ): Promise<PrismaSong> {
    return this.prisma.song.delete(args);
  }

  async findLyricsItems(
    parentId: string,
    args: Prisma.LyricsFindManyArgs
  ): Promise<PrismaLyrics[]> {
    return this.prisma.song
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .lyricsItems(args);
  }

  async findStreams(
    parentId: string,
    args: Prisma.StreamFindManyArgs
  ): Promise<PrismaStream[]> {
    return this.prisma.song
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .streams(args);
  }

  async getAlbum(parentId: string): Promise<PrismaAlbum | null> {
    return this.prisma.song
      .findUnique({
        where: { id: parentId },
      })
      .album();
  }
}
