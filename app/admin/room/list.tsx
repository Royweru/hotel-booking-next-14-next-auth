import { List, Datagrid, TextField, NumberField, ReferenceField } from 'react-admin';

export const RoomList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source='details' />
            <TextField  source='imageUrl'/>
            <NumberField source='rating' />
            <NumberField source='price' />
            <ReferenceField source='categoryId' reference='categories'/>
        </Datagrid>
    </List>
);