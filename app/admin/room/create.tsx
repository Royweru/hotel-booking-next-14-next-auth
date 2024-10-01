import * as React from 'react';
import { Create, SimpleForm, TextInput,NumberInput, required, ReferenceInput } from 'react-admin';


export const RoomCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput source="name" validate={[required()]}  label="Name"/>
          <ReferenceInput source='categoryId' reference='categories' />
            <TextInput source="details" validate={[required()]}  label=" Details"/>
            <TextInput source="imageUrl" validate={[required()]}  label=" Image Url"/>
            <NumberInput source="price" validate={[required()]}  label="Price"/>
            <NumberInput source="rating" validate={[required()]}  label="Rating"/>
        </SimpleForm>
    </Create>
);