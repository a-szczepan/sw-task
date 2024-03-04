import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'https://swapi.dev/api';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: URL
  }),
  endpoints: () => ({})
});