import { Expose, deserialize, serialize, classToPlain } from "class-transformer";
import { PlaylistImage } from "./playlist-image";
import { PlaylistOwner } from "./playlist-owner";
import { PlaylistTrack } from "./playlist-track";

export class Playlist {
  @Expose({ name: 'collaborative' })
  collaborative!: boolean;

  @Expose({ name: 'description' })
  description!: string;

  @Expose({ name: 'external_urls' })
  externalUrls!: object;

  @Expose({ name: 'href' })
  href!: string;

  @Expose({ name: 'id' })
  id!: string;

  @Expose({ name: 'images'})
  images!: PlaylistImage[];

  @Expose({ name: 'name' })
  name!: string;

  @Expose({ name: 'owner'})
  owner!: PlaylistOwner;

  @Expose({ name: 'primary_color' })
  primaryColor!: string;

  @Expose({ name: 'public' })
  public!: boolean;

  @Expose({ name: 'snapshot_id' })
  snapshotId!: string;

  @Expose({ name: 'tracks' })
  tracks!: PlaylistTrack;

  @Expose({ name: 'type' })
  type!: string;

  @Expose({ name: 'uri' })
  uri!: string;

  static fromJson(json: any): Playlist {
    return deserialize(Playlist, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}