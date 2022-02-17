import { ExplicitContent } from './../explicitContent';
import { Image } from './../image';
import { UiModel } from './../_ui_helper/ui-model';
import { classToPlain, deserialize, Expose, serialize, Type } from "class-transformer";
import { ExternalUlrs } from '../externalUrls';
import { Followers } from '../followers';

export class User extends UiModel {
  @Expose({name: 'country'})
  country?: string;

  @Expose({name: 'display_name'})
  displayName!: string;

  @Expose({name: 'explicit_content'})
  @Type(() => ExplicitContent)
  explicitContent?: ExplicitContent;

  @Expose({name: 'external_urls'})
  @Type(() => ExternalUlrs)
  externalUrls!: ExternalUlrs;

  @Expose({name: 'followers'})
  @Type(() => Followers)
  followers!: Followers;

  @Expose({name: 'href'})
  href!: string;

  @Expose({name: 'id'})
  id!: string;

  @Expose({name: 'images'})
  @Type(() => Image)
  images!: Image[];

  @Expose({name: 'product'})
  product?: string;

  @Expose({name: 'type'})
  type!: string;

  @Expose({name: 'uri'})
  uri!: string;

  static fromJson(json: any): User {
    return deserialize(User, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}