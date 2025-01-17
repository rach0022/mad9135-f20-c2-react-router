# React Navigation by RACH0022

> In this project, you will build a simple master/detail application using React with React Router.

## Requirements:

- [x] Use fetch() to asynchronously retrieve data from a remote server.
- [x] Use the data from JSONPlaceHolder: JSONplaceholder API docs
- [x] Your app should show a list of all the users on the home page.
- [x] There needs to be a link from each displayed user for two other values for the selected user.

  - Choose two from ToDos, Posts, Albums, Photos, or Comments

- [x] There should be a top-level nav menu that lets the website user see all of each of the three resources: users plus the two other resources that you choose.
- [x] React Router should be used for all navigation.
- [x] Clicking the link to one of the two related resources from a given user list item will show only the elements for that user.
- [x] Clicking anywhere else on the user list item should display full details for the selected user including links to the two related resource lists.
- [x] While data is being loaded in any component you should have a message/icon/indicator that data is loading. Animated is best because it gets the user's attention.
- [x] Create a private repo on GitHub with the name mad9135-f20-c2-react-router.
- [x] Invite GitHub user rlmckenney as a collaborator on your private repo.
- [x] Submit the URL for your code repo to Brightspace.

## To Do:

- [x] Style the Master Detail Application
- [x] Decide on colour scheme for app
- [x] Choose Serif and Sans-Serif Fonts
- [x] convert css to sass for 'App.css'
- [x] add dependancies for bulma with yarn add bulma
- [x] fix bug with bulma nav burger/menu interaction
- [x] make it so clicking out of the navbar will switch back the focus
- [x] update styles on userdetails cards
- [x] add x-icon for REACT Nav App
- [x] create a 'brand' icon for react nav app
- [x] figure out how to stop my spinning loader when the page is loaded || also clean up the pathname that is shown
- [x] make design responsive by adding media queries
- [ ] style the go home button/ make a back button instead. || add this button to the user posts/ albums

## Bugs:

- [x] ISS-01 Change Comments and Photos to Posts and Albums for assignment requirements
- [x] ISS-02 Make changes to 'lift' the state up, move the posts/ albums/ users fetch to a higher parent element that can allow the access of these data structures at different points in the application (like viewing specific details for user/ posts/ albums)
- [x] ISS-03 change html elements of custom components to more easily style them and potentially set up SASS as well, if needed || also set up main/ header in each component || also set up bulma
- [ ] ISS-04 (optional) update albums to grab the photos from /albums/:albumId/photos
