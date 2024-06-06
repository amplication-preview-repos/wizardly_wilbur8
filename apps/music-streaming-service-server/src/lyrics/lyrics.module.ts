import { Module } from "@nestjs/common";
import { LyricsModuleBase } from "./base/lyrics.module.base";
import { LyricsService } from "./lyrics.service";
import { LyricsController } from "./lyrics.controller";
import { LyricsResolver } from "./lyrics.resolver";

@Module({
  imports: [LyricsModuleBase],
  controllers: [LyricsController],
  providers: [LyricsService, LyricsResolver],
  exports: [LyricsService],
})
export class LyricsModule {}
