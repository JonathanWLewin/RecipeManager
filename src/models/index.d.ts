import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ingredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ingredient {
  readonly id: string;
  readonly name: string;
  readonly UOM?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ingredient, ingredientMetaData>);
  static copyOf(source: ingredient, mutator: (draft: MutableModel<ingredient, ingredientMetaData>) => MutableModel<ingredient, ingredientMetaData> | void): ingredient;
}