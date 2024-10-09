import TodoAdd from '@/components/TodoAdd';
import TodoList from '@/components/TodoList';
import { useGetTodosQuery } from '@/redux/api/todo';
import React from 'react';

const page = () =>{
 return   <>
     <TodoAdd/>
     <TodoList/> 
    </>
}

export default page;