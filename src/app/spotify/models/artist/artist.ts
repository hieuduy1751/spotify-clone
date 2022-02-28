import { classToPlain, deserialize, Expose, serialize, Type } from "class-transformer";
import { ExternalUlrs } from "../externalUrls";
import { Image } from "../image";
import { UiModel } from "../_ui_helper/ui-model";
import { ArtistFollowers } from "./artist-followers";

export class Artist  extends UiModel {
  @Expose({ name: "external_urls" })
  @Type(() => ExternalUlrs)
  externalUrls!: ExternalUlrs;

  @Expose({ name: "followers" })
  @Type(() => ExternalUlrs)
  followers!: ArtistFollowers;

  @Expose({ name: "genres" })
  genres!: string[];

  @Expose({ name: "href" })
  href!: string;

  @Expose({ name: "id" })
  id!: string;

  @Expose({ name: "images" })
  @Type(()  => Image) 
  images!: Image[];

  @Expose({ name: "name" })
  name!: string;

  @Expose({ name: "popularity" })
  popularity!: number;

  @Expose({ name: "type" })
  type!: string;

  @Expose({ name: "uri" })
  uri!: string;

  static fromJson(json: any): Artist {
    return deserialize(Artist, json);
  }

  serialize(): any {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}