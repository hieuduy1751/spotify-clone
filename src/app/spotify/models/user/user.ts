import { Expose } from "class-transformer";

export class User {
  @Expose({name: 'country'})
  country!: string;

  @Expose({name: 'display_name'})
  displayName!: string;

}