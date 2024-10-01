import * as React from 'react';
import { Create, NumberInput, SimpleForm, TextInput, required } from 'react-admin';


export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]}  label="Category name"/>
            <TextInput source="description" validate={[required()]}  label="Category description"/>
            <NumberInput source="beds" validate={[required()]}  label="Beds"/>
        </SimpleForm>
    </Create>
);