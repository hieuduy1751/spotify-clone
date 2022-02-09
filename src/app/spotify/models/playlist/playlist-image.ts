import { classToPlain, deserialize, Expose, serialize } from "class-transformer";

export class PlaylistImage {
  @Expose({name: 'height'})
  height?: string;

  @Expose({name: 'url'})
  url!: string;

  @Expose({name: 'width'})
  width?: string;

  static fromJson(json: any): PlaylistImage {
    return deserialize(PlaylistImage, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}