import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LyricsServiceBase } from "./base/lyrics.service.base";

@Injectable()
export class LyricsService extends LyricsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
