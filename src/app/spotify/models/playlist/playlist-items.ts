import { classToPlain, deserialize, Expose, serialize } from "class-transformer";
import { Track } from "../track/track";
import { PlaylistAddedBy } from "./playlist-added-by";
import { PlaylistVideoThumbnail } from "./playlist-video-thumbnail";

export class PlaylistItems {
  @Expose({ name: 'added_at'})
  addedAt!: Date;

  @Expose({name: 'added_by'})
  addedBy!: PlaylistAddedBy;

  @Expose({ name: 'is_local'})
  isLocal!: boolean;

  @Expose({ name: 'primary_color'})
  primaryColor!: string;

  @Expose({ name: 'tracks'})
  tracks!: Track[];

  @Expose({name: 'video_thumbnail'})
  videoThumbnail!: PlaylistVideoThumbnail;

  static fromJson(json: any): PlaylistItems {
    return deserialize(PlaylistItems, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}