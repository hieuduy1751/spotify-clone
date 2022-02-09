import { classToPlain, deserialize, Expose, serialize } from "class-transformer";

export class PlaylistTrack {
  @Expose({ name: 'href' })
  href!: string;

  @Expose({ name: 'total' })
  total!: number;

  static fromJson(json: any): PlaylistTrack {
    return deserialize(PlaylistTrack, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}