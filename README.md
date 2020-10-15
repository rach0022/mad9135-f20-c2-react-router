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
- [ ] While data is being loaded in any component you should have a message/icon/indicator that data is loading. Animated is best because it gets the user's attention.
- [x] Create a private repo on GitHub with the name mad9135-f20-c2-react-router.
- [ ] Invite GitHub user rlmckenney as a collaborator on your private repo.
- [ ] Submit the URL for your code repo to Brightspace.

## To Do:

- [ ] Style the Master Detail Application
- [ ] Decide on colour scheme for app
- [ ] Choose Serif and Sans-Serif Fonts
- [ ] convert css to sass for 'App.css'
- [ ] maybe change to using nested routes user/:id/posts or user/:id/albums

## Bugs:

- [x] ISS-01 Change Comments and Photos to Posts and Albums for assignment requirements
- [x] ISS-02 Make changes to 'lift' the state up, move the posts/ albums/ users fetch to a higher parent element that can allow the access of these data structures at different points in the application (like viewing specific details for user/ posts/ albums)
- [ ] ISS-03 change html elements of custom components to more easily style them and potentially set up SASS as well, if needed
