import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '81baafd198mshcd8933d0e59c345p13e4edjsnd790771f0500',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
        headers.set('x-rapidapi-key', '81baafd198mshcd8933d0e59c345p13e4edjsnd790771f0500');

        return headers;
       },
        
}),
endpoints: (builder) => ({
    getTopCharts: builder.query({ query: '/charts/world'}),

})  
 });
 export const {
    useGetTopChartsQuery,
 } = shazamCoreApi;
       