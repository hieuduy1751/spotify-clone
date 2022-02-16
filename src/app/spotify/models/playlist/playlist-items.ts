import { UiModel } from './../_ui_helper/ui-model';
import { classToPlain, deserialize, Exclude, Expose, serialize, Type } from "class-transformer";
import { Track } from "../track/track";
import { PlaylistAddedBy } from "./playlist-added-by";
import { PlaylistVideoThumbnail } from "./playlist-video-thumbnail";

export class PlaylistItems extends UiModel {
  @Expose({ name: 'added_at'})
  addedAt!: Date;

  @Expose({name: 'added_by'})
  @Type(() => PlaylistAddedBy)
  @Exclude({ toPlainOnly: true })
  addedBy!: PlaylistAddedBy;

  @Expose({ name: 'is_local'})
  isLocal!: boolean;

  @Expose({ name: 'primary_color'})
  primaryColor!: string;

  @Expose({ name: 'tracks'})
  @Exclude({ toPlainOnly: true })
  @Type(() => Track)
  tracks!: Track[];

  @Expose({name: 'video_thumbnail'})
  @Exclude({ toPlainOnly: true })
  @Type(() => PlaylistVideoThumbnail)
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