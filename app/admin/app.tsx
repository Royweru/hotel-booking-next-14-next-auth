"use client"

import React from 'react'
import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest';
import { CategoryList } from './category/list';
import { CategoryCreate } from './category/create';
import { CategoryEdit } from './category/edit';
import { RoomList } from './room/list';
import { RoomCreate } from './room/create';
import { RoomEdit } from './room/edit';


const dataProvider = simpleRestProvider('/api')
export const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
     <Resource
       name='categories'
       list={CategoryList}
       create={CategoryCreate}
       edit={CategoryEdit}
      />
     <Resource
       name='rooms'
       list={RoomList}
       create={RoomCreate}
       edit={RoomEdit}
      />
   
    </Admin>
  )
}
