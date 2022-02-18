import { UiModel } from './../_ui_helper/ui-model';
import { classToPlain, deserialize, Exclude, Expose, serialize, Type } from "class-transformer";
import { Track } from "../track/track";
import { PlaylistAddedBy } from "./playlist-added-by";
import { PlaylistVideoThumbnail } from "./playlist-video-thumbnail";

export class PlaylistItems extends UiModel {
<<<<<<< HEAD
  [x: string]: any;
  @Expose({ name: 'added_at' })
  addedAt!: Date;

  @Expose({ name: 'added_by' })
=======
  @Expose({ name: 'added_at'})
  addedAt!: Date;

  @Expose({name: 'added_by'})
>>>>>>> d3c5f6b4a63a8d99d93e8a05475fc6923b4ba7e5
  @Type(() => PlaylistAddedBy)
  @Exclude({ toPlainOnly: true })
  addedBy!: PlaylistAddedBy;

  @Expose({ name: 'is_local' })
  isLocal!: boolean;

  @Expose({ name: 'primary_color' })
  primaryColor!: string;

<<<<<<< HEAD
  @Expose({ name: 'track' })
  @Exclude({ toPlainOnly: true })
  @Type(() => Track)
  track!: Track;

  @Expose({ name: 'video_thumbnail' })
=======
  @Expose({ name: 'tracks'})
  @Exclude({ toPlainOnly: true })
  @Type(() => Track)
  tracks!: Track[];

  @Expose({name: 'video_thumbnail'})
>>>>>>> d3c5f6b4a63a8d99d93e8a05475fc6923b4ba7e5
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