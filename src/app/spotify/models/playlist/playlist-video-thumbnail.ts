import { UiModel } from './../_ui_helper/ui-model';
import { classToPlain, deserialize, Expose, serialize } from "class-transformer";

export class PlaylistVideoThumbnail extends UiModel{
  @Expose({name: 'url'})
  url!: string;

  static fromJson(json: any): PlaylistVideoThumbnail {
    return deserialize(PlaylistVideoThumbnail, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}