/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
      id
      name
      quantity
      UOM
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
      id
      name
      quantity
      UOM
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
      id
      name
      quantity
      UOM
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createShoppingItem = /* GraphQL */ `
  mutation CreateShoppingItem(
    $input: CreateShoppingItemInput!
    $condition: ModelShoppingItemConditionInput
  ) {
    createShoppingItem(input: $input, condition: $condition) {
      id
      name
      quantit
      UOM
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateShoppingItem = /* GraphQL */ `
  mutation UpdateShoppingItem(
    $input: UpdateShoppingItemInput!
    $condition: ModelShoppingItemConditionInput
  ) {
    updateShoppingItem(input: $input, condition: $condition) {
      id
      name
      quantit
      UOM
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteShoppingItem = /* GraphQL */ `
  mutation DeleteShoppingItem(
    $input: DeleteShoppingItemInput!
    $condition: ModelShoppingItemConditionInput
  ) {
    deleteShoppingItem(input: $input, condition: $condition) {
      id
      name
      quantit
      UOM
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
      id
      name
      ingredients {
        id
        name
        quantity
        UOM
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
      id
      name
      ingredients {
        id
        name
        quantity
        UOM
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
      id
      name
      ingredients {
        id
        name
        quantity
        UOM
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
