import { UiModel } from './../_ui_helper/ui-model';
import { PlaylistFollowers } from './playlist-followers';
import { Image } from './../image';
import { Expose, deserialize, serialize, classToPlain, Type, Exclude } from "class-transformer";
import { PlaylistOwner } from "./playlist-owner";
import { PlaylistTrack } from "./playlist-track";
import { ExternalUlrs } from '../externalUrls';

export class Playlist extends UiModel {
  @Expose({ name: 'collaborative' })
  collaborative!: boolean;

  @Expose({ name: 'description' })
  description!: string;

  @Expose({ name: 'external_urls' })
  @Exclude({ toPlainOnly: true })
  @Type(() => ExternalUlrs)
  externalUrls!: ExternalUlrs;

  @Expose({ name: 'followers'})
  @Exclude({ toPlainOnly: true })
  @Type(() => PlaylistFollowers)
  followers!: PlaylistFollowers;

  @Expose({ name: 'href' })
  href!: string;

  @Expose({ name: 'id' })
  id!: string;

  @Expose({ name: 'images'})
  images!: Image[];

  @Expose({ name: 'name' })
  name!: string;

  @Expose({ name: 'owner'})
  @Exclude({ toPlainOnly: true })
  @Type(() => PlaylistOwner)
  owner!: PlaylistOwner;

  @Expose({ name: 'primary_color' })
  primaryColor!: string;

  @Expose({ name: 'public' })
  public!: boolean;

  @Expose({ name: 'snapshot_id' })
  snapshotId!: string;

  @Expose({ name: 'tracks' })
  @Exclude({ toPlainOnly: true })
  @Type(() => PlaylistTrack)
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