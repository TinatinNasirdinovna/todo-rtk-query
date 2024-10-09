"use client"
import { api } from '@/redux/api';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import React, { ReactNode, FC } from 'react';

interface IReduxProviderProps {
    children: ReactNode;
}

const ReduxProvider: FC<IReduxProviderProps> = ({children}) => {
    return (
        <div>
            <ApiProvider api={api}>{children}</ApiProvider>
        </div>
    );
};

export default ReduxProvider;