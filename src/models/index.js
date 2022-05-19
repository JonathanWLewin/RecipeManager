// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ingredient, shoppingItem, recipe } = initSchema(schema);

export {
  ingredient,
  shoppingItem,
  recipe
};