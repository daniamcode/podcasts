## Steps followed
1) Install create-react-app
- to run dev mode: 
        npm run start
- to run production mode: npm run build and then execute: 
        npm install -g serve
        serve -s build

2) install react-router-dom and configure App.js with routes. Create Home
3) install and configure Redux (we need a global state since we have to store a list of podcasts and details for as much as 24h)
4) create action to fetch data
5) add common header and flag to know when navigation is done
6) add podcasts component and routes