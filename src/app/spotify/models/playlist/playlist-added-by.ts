import { UiModel } from './../_ui_helper/ui-model';
import { classToPlain, deserialize, Exclude, Expose, serialize, Type } from "class-transformer";
import { ExternalUlrs } from "../externalUrls";

export class PlaylistAddedBy extends UiModel {
  @Expose({name: 'external_urls'})
  @Exclude({ toPlainOnly: true })
  @Type(() => ExternalUlrs)
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