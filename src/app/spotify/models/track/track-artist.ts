import { UiModel } from './../_ui_helper/ui-model';
import { ExternalUlrs } from './../externalUrls';
import { Expose, deserialize, serialize, classToPlain, Type, Exclude } from "class-transformer";


export class TrackArtist extends UiModel {
  @Expose({ name: "external_urls" })
  @Exclude({ toPlainOnly: true })
  @Type(() => ExternalUlrs)
  externalUrls!: ExternalUlrs;

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