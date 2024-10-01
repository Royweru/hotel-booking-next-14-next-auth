import * as React from 'react';
import {  SimpleForm, TextInput, required, Edit } from 'react-admin';


export const CategoryEdit= () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]}  label="Category name"/>
            <TextInput source="description" validate={[required()]}  label="Category description"/>
        </SimpleForm>
    </Edit>
);