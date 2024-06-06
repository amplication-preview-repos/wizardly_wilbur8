import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LyricsService } from "./lyrics.service";
import { LyricsControllerBase } from "./base/lyrics.controller.base";

@swagger.ApiTags("lyrics")
@common.Controller("lyrics")
export class LyricsController extends LyricsControllerBase {
  constructor(protected readonly service: LyricsService) {
    super(service);
  }
}
