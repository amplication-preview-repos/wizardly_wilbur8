/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LyricsWhereInput } from "./LyricsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LyricsOrderByInput } from "./LyricsOrderByInput";

@ArgsType()
class LyricsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LyricsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LyricsWhereInput, { nullable: true })
  @Type(() => LyricsWhereInput)
  where?: LyricsWhereInput;

  @ApiProperty({
    required: false,
    type: [LyricsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LyricsOrderByInput], { nullable: true })
  @Type(() => LyricsOrderByInput)
  orderBy?: Array<LyricsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LyricsFindManyArgs as LyricsFindManyArgs };
