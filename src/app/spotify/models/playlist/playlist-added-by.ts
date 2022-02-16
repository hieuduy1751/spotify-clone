import { classToPlain, deserialize, Expose, serialize } from "class-transformer";
import { ExternalUlrs } from "../externalUrls";

export class PlaylistAddedBy {
  @Expose({name: 'external_urls'})
  externalUrls!: ExternalUlrs;

  @Expose({ name: 'href'})
  href!: string;

  @Expose({ name: 'id'})
  id!: string;

  @Expose({name: 'type'})
  type!: string

  @Expose({name: 'uri'})
  uri!: string;

  static fromJson(json: any): PlaylistAddedBy {
    return deserialize(PlaylistAddedBy, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}