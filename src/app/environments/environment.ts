/*import * as dotenv from 'dotenv';
dotenv.config();
require ( ' loadenv ' ) ( ) ;*/

export const environment = {
  production:true,
  apikey: '0182034c77258e1f76d2e9623157cd59',//process.env["API_KEY"],
  apiURL: 'https://api.themoviedb.org/3/discover/movie'//process.env["API_URL"]
} as const;

//API_KEY='0182034c77258e1f76d2e9623157cd59'
//API_URL='https://api.themoviedb.org/3/discover/movie'
