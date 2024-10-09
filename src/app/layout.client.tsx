import ReduxProvider from '@/providers/ReduxProvider';
import React, { FC, ReactNode } from 'react';


interface ILayoutClientProps {
    children: ReactNode;
}

const LayoutClient: FC<ILayoutClientProps> = ({children}) => {
    return (
        <ReduxProvider>
            {children}
        </ReduxProvider>
    );
};

export default LayoutClient;