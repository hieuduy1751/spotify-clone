import { UiModel } from './../_ui_helper/ui-model';
import { ExternalUlrs } from './../externalUrls';
import { classToPlain, deserialize, Exclude, Expose, serialize, Type } from "class-transformer";

export class PlaylistOwner extends UiModel {
  @Expose({ name: 'display_name'})
  displayName!: string;

  @Expose({ name: 'external_urls'})
  @Exclude({ toPlainOnly: true })
  @Type(() => ExternalUlrs)
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