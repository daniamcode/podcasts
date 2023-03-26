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
7) add a timer to fetch data just if 24h have passed since the initial request
8) add episodes component and routes
9) add listElement component ad styles to home
10) fetch timed data for individual podcasts. THE GIVEN URL IS INCORRECT, SO I FOUND:
https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=10
I ASSUME THE FIRST RESULT IS THE DETAIL FOR THE PODCAST AND THE FOLLOWING ONES ARE EPISODES
11) add styles to individual podcasts
12) add Sidebar that will be common for podcasts and episodes
13) add episode details
14) fix flag on navigation
15) add filter/search