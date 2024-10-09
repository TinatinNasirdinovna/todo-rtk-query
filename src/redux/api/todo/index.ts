import { api as index } from "..";

const api = index.injectEndpoints({
    endpoints: (build) => ({
        getTodos: build.query<TODO.GetTodosRes, TODO.GetTodosReq>({
            query: () => ({
                url: "",
                method: "GET"
            }),
            providesTags: ['todo']
        }),
        postTodo: build.mutation<TODO.PostTodosRes, TODO.PostTodosReq>({
            query: (data) => ({
                url: "",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["todo"],
        })
    })
})


export const {useGetTodosQuery, usePostTodoMutation} = api
