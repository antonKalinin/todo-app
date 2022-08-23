import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath: 'todosApi',
    tagTypes: ['Task'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: build => ({
        getTodos: build.query({
            query: () => `todos?done=false`,
            providesTags: (result) => 
            result
              ? [
                  ...result.map(({ id }) => ({ type: 'Task', id })),
                  { type: 'Task', id: 'LIST' },
                ]
              : [{ type: 'Task', id: 'LIST' }]
        }),
        getDoneTodos: build.query({
            query: () => `todos?done=true`,
            providesTags: (result) => 
            result
              ? [
                  ...result.map(({ id }) => ({ type: 'Task', id })),
                  { type: 'Task', id: 'LIST' },
                ]
              : [{ type: 'Task', id: 'LIST' }]
        }),
        addTodos: build.mutation({
            query: body => ({
                url: 'todos',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Task', id: 'LIST'}]
        }),
        deleteTodos: build.mutation({
            query: id => ({
                url: `todos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: 'Task', id: 'LIST'}]
        }),
        updateTodos: build.mutation({
            query(data) {
                const {id, ...body} = data;
                return {
                    url: `todos/${id}`,
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: [{type: 'Task', id: 'LIST'}]
        })
    })
});

export const {
    useGetTodosQuery,
    useGetDoneTodosQuery,
    useAddTodosMutation,
    useDeleteTodosMutation,
    useUpdateTodosMutation
} = todosApi;