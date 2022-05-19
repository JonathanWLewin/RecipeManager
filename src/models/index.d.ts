import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ingredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type shoppingItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type recipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ingredient {
  readonly id: string;
  readonly name: string;
  readonly quantity: number;
  readonly UOM?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ingredient, ingredientMetaData>);
  static copyOf(source: ingredient, mutator: (draft: MutableModel<ingredient, ingredientMetaData>) => MutableModel<ingredient, ingredientMetaData> | void): ingredient;
}

export declare class shoppingItem {
  readonly id: string;
  readonly name: string;
  readonly quantit: number;
  readonly UOM?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<shoppingItem, shoppingItemMetaData>);
  static copyOf(source: shoppingItem, mutator: (draft: MutableModel<shoppingItem, shoppingItemMetaData>) => MutableModel<shoppingItem, shoppingItemMetaData> | void): shoppingItem;
}

export declare class recipe {
  readonly id: string;
  readonly name: string;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<recipe, recipeMetaData>);
  static copyOf(source: recipe, mutator: (draft: MutableModel<recipe, recipeMetaData>) => MutableModel<recipe, recipeMetaData> | void): recipe;
}