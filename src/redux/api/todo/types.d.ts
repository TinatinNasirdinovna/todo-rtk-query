namespace TODO {
    type GetTodosRes = {
        _id: number
        title: string;
        description: string 
    }[];
    type GetTodosReq = void;

    type PostTodosRes = {
        _id: number
        title: string;
        description: string 
    }[];
    type PostTodosReq = void;
}