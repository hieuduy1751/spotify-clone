import { ExternalUlrs } from './../externalUrls';
import { classToPlain, deserialize, Expose, serialize } from "class-transformer";

export class PlaylistOwner {
  @Expose({ name: 'display_name'})
  displayName!: string;

  @Expose({ name: 'external_urls'})
  externalUrls!: ExternalUlrs; 

  @Expose({ name: 'href'})
  href!: string;
  
  @Expose({ name: 'id'})
  id!: string;

  @Expose({ name: 'type'})
  type!: string;

  @Expose({ name: 'uri'})
  uri!: string;

  static fromJson(json: any): PlaylistOwner {
    return deserialize(PlaylistOwner, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}