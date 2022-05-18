// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ingredient, shoppingItem } = initSchema(schema);

export {
  ingredient,
  shoppingItem
};