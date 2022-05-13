// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ingredient } = initSchema(schema);

export {
  ingredient
};