import * as graphql from "@nestjs/graphql";
import { LyricsResolverBase } from "./base/lyrics.resolver.base";
import { Lyrics } from "./base/Lyrics";
import { LyricsService } from "./lyrics.service";

@graphql.Resolver(() => Lyrics)
export class LyricsResolver extends LyricsResolverBase {
  constructor(protected readonly service: LyricsService) {
    super(service);
  }
}
