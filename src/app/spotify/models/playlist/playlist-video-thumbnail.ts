import { classToPlain, deserialize, Expose, serialize } from "class-transformer";

export class PlaylistVideoThumbnail {
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