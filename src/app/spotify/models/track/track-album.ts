import { ExternalUlrs } from './../externalUrls';
import { classToPlain, deserialize, Exclude, Expose, serialize, Type } from "class-transformer";
import { TrackArtist } from "./track-artist";
import { Image } from "../image";
import { UiModel } from '../_ui_helper/ui-model';

export class TrackAlbum extends UiModel {
  @Expose({ name: "album_type" })
  albumType!: string;

  @Expose({ name: "artists" })
  @Exclude({ toPlainOnly: true })
  @Type(() => TrackArtist)
  artists!: TrackArtist[];

  @Expose({ name: "external_urls" })
  @Exclude({ toPlainOnly: true })
  @Type(() => ExternalUlrs)
  externalUrls!: ExternalUlrs;

  @Expose({ name: "href" })
  href!: string;

  @Expose({ name: "id" })
  id!: string;

  @Expose({ name: "images" })
  @Exclude({ toPlainOnly: true })
  @Type(() => Image)
  images!: Image[];

  @Expose({ name: "name" })
  name!: string;

  @Expose({ name: "release_date" })
  releaseDate!: string;

  @Expose({ name: "release_date_precision" })
  releaseDatePrecision!: string;

  @Expose({ name: "total_tracks" })
  totalTracks!: number;

  @Expose({ name: "type" })
  type!: string;

  @Expose({ name: "uri" })
  uri!: string;

  static fromJson(json: any): TrackAlbum {
    return deserialize(TrackAlbum, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
