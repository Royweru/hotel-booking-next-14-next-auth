import { List, Datagrid, TextField } from 'react-admin';

export const CategoryList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source='description' />
        </Datagrid>
    </List>
);