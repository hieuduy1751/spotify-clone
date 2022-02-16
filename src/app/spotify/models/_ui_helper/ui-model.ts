import { ModifierState } from './../_core/modifier-state';
import { Exclude } from "class-transformer";
import { Default } from '../_decorator/default';

export class UiModel {
  @Exclude()
  @Default(ModifierState.Default)
  modifierState!: ModifierState;
}