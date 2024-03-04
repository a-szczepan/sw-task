import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const URL = 'https://swapi.dev/api/'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: URL
  }),
  endpoints: (builder) => ({
    getPlanetsList: builder.query({
      query: (page=1) => `planets/?page=${page}`
    }),
    getPlanetInfo: builder.query({
      query: (url) => url
    })
  })
})

export const { useGetPlanetsListQuery, useGetPlanetInfoQuery } = api
