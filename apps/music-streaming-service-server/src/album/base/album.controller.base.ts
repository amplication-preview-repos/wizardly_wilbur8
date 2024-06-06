/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AlbumService } from "../album.service";
import { AlbumCreateInput } from "./AlbumCreateInput";
import { Album } from "./Album";
import { AlbumFindManyArgs } from "./AlbumFindManyArgs";
import { AlbumWhereUniqueInput } from "./AlbumWhereUniqueInput";
import { AlbumUpdateInput } from "./AlbumUpdateInput";
import { SongFindManyArgs } from "../../song/base/SongFindManyArgs";
import { Song } from "../../song/base/Song";
import { SongWhereUniqueInput } from "../../song/base/SongWhereUniqueInput";

export class AlbumControllerBase {
  constructor(protected readonly service: AlbumService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Album })
  async createAlbum(@common.Body() data: AlbumCreateInput): Promise<Album> {
    return await this.service.createAlbum({
      data: data,
      select: {
        artist: true,
        coverImage: true,
        createdAt: true,
        genre: true,
        id: true,
        releaseDate: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Album] })
  @ApiNestedQuery(AlbumFindManyArgs)
  async albums(@common.Req() request: Request): Promise<Album[]> {
    const args = plainToClass(AlbumFindManyArgs, request.query);
    return this.service.albums({
      ...args,
      select: {
        artist: true,
        coverImage: true,
        createdAt: true,
        genre: true,
        id: true,
        releaseDate: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Album })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async album(
    @common.Param() params: AlbumWhereUniqueInput
  ): Promise<Album | null> {
    const result = await this.service.album({
      where: params,
      select: {
        artist: true,
        coverImage: true,
        createdAt: true,
        genre: true,
        id: true,
        releaseDate: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Album })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAlbum(
    @common.Param() params: AlbumWhereUniqueInput,
    @common.Body() data: AlbumUpdateInput
  ): Promise<Album | null> {
    try {
      return await this.service.updateAlbum({
        where: params,
        data: data,
        select: {
          artist: true,
          coverImage: true,
          createdAt: true,
          genre: true,
          id: true,
          releaseDate: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Album })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAlbum(
    @common.Param() params: AlbumWhereUniqueInput
  ): Promise<Album | null> {
    try {
      return await this.service.deleteAlbum({
        where: params,
        select: {
          artist: true,
          coverImage: true,
          createdAt: true,
          genre: true,
          id: true,
          releaseDate: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/songs")
  @ApiNestedQuery(SongFindManyArgs)
  async findSongs(
    @common.Req() request: Request,
    @common.Param() params: AlbumWhereUniqueInput
  ): Promise<Song[]> {
    const query = plainToClass(SongFindManyArgs, request.query);
    const results = await this.service.findSongs(params.id, {
      ...query,
      select: {
        album: {
          select: {
            id: true,
          },
        },

        artist: true,
        createdAt: true,
        duration: true,
        file: true,
        genre: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/songs")
  async connectSongs(
    @common.Param() params: AlbumWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        connect: body,
      },
    };
    await this.service.updateAlbum({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/songs")
  async updateSongs(
    @common.Param() params: AlbumWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        set: body,
      },
    };
    await this.service.updateAlbum({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/songs")
  async disconnectSongs(
    @common.Param() params: AlbumWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        disconnect: body,
      },
    };
    await this.service.updateAlbum({
      where: params,
      data,
      select: { id: true },
    });
  }
}
