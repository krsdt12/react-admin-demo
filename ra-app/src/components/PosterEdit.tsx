import {
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PosterEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="category_id" reference="categories" />
      <TextInput source="title" />
      <NumberInput source="width" />
      <NumberInput source="height" />
      <NumberInput source="price" />
      <TextInput source="thumbnail" />
      <TextInput source="image" />
      <TextInput source="description" />
      <NumberInput source="stock" />
      <NumberInput source="sales" />
    </SimpleForm>
  </Edit>
);
