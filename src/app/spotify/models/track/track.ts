import { classToPlain, deserialize, Expose, serialize } from "class-transformer";
import { TrackAlbum } from "./track-album";
import { TrackArtist } from "./track-artist";

export class Track {
  @Expose({ name: "album" })
  album!: TrackAlbum;

  @Expose({ name: "artists" })
  artists!: TrackArtist[];

  @Expose({ name: "disc_number" })
  discNumber!: number;

  @Expose({ name: "duration_ms" })
  durationMs!: number;

  @Expose({ name: "explicit" })
  explicit!: boolean;

  @Expose({ name: "external_ids" })
  externalIds!: object;

  @Expose({ name: "external_urls" })
  externalUrls!: object;

  @Expose({ name: "href" })
  href!: string;

  @Expose({ name: "id" })
  id!: string;

  @Expose({ name: "is_local" })
  isLocal!: boolean;

  @Expose({ name: "is_playable" })
  isPlayable!: boolean;

  @Expose({ name: "name" })
  name!: string;

  @Expose({ name: "popularity" })
  popularity!: number;

  @Expose({ name: "preview_url" })
  previewUrl!: string;
  
  @Expose({ name: "track_number" })
  trackNumber!: number;

  @Expose({ name: "type" })
  type!: string;

  @Expose({ name: "uri" })
  uri!: string;

  static fromJson(json: any): Track {
    return deserialize(Track, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}