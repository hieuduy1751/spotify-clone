import { classToPlain, deserialize, Expose, serialize } from "class-transformer";
import { TrackArtist } from "./track-artist";
import { Image } from "../image";

export class TrackAlbum {
  @Expose({ name: "album_type" })
  albumType!: string;

  @Expose({ name: "artists" })
  artists!: TrackArtist[];

  @Expose({ name: "external_urls" })
  externalUrls!: object;

  @Expose({ name: "href" })
  href!: string;

  @Expose({ name: "id" })
  id!: string;

  @Expose({ name: "images" })
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
