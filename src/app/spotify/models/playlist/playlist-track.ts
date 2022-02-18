import { UiModel } from './../_ui_helper/ui-model';
import { classToPlain, deserialize, Exclude, Expose, serialize, Type } from "class-transformer";
import { PlaylistItems } from "./playlist-items";

export class PlaylistTrack extends UiModel{
  @Expose({ name: 'href' })
  href!: string;

  @Expose({name: 'items'})
  @Exclude({ toPlainOnly: true })
  @Type(() => PlaylistItems)
  items! : PlaylistItems[];

  @Expose({ name: 'limit' })
  limit!: number;

  @Expose({ name: 'next' })
  next!: string;

  @Expose({ name: 'offset' })
  offset!: number;

  @Expose({ name: 'previous' })
  previous!: string;

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