import { Expose, deserialize, serialize, classToPlain } from "class-transformer";


export class TrackArtist {
  @Expose({ name: "external_urls" })
  externalUrls!: object;

  @Expose({ name: "href" })
  href!: string;

  @Expose({ name: "id" })
  id!: string;

  @Expose({ name: "name" })
  name!: string;

  @Expose({ name: "type" })
  type!: string;

  @Expose({ name: "uri" })
  uri!: string;

  static fromJson(json: any): TrackArtist {
    return deserialize(TrackArtist, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}