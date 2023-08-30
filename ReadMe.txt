do: npm install 

(almost) working model of multi-page SSR vite/express/react from: 

https://github.com/vitejs/vite-plugin-react/tree/main/playground/ssr-react

slightly changed with:
1) because of age of this demo project, all dependantcies in 
package.json updated with newest version 
2)  a bit of css added
3)another page "extra" added
4) UseEffectFetchData added 



to make work:
in package.json
          "@vitejs/plugin-react": "workspace:*",
provoked  an error. It was changed to:
          "@vitejs/plugin-react": "^4.0.4",


do:    npm run dev   //  for development version     
do:  npm run build  // for production version (ie creates dist directory)
difficulty with preview of build version, at command prompt did:
NODE_ENV=production node server  // which seemed to work correctly 



https://stackoverflow.com/questions/45390377/react-how-to-pass-returned-data-from-an-exported-function-to-a-component

"name": "@vitejs/test-ssr-react",


can't be found with:
npm run build
NODE_ENV  production
no dev dependencies



