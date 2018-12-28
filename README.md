# General Assembly WDI Project 2: Instagram Clone ("Lenzation")

View Lenzation on [Heroku](https://offtherail.herokuapp.com/)
View Lenzation's [GitHub Repo](https://github.com/indiaderrick/wdi-project-two)

## Subtitle

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## Homepage

<p align="center">
  <img height=400 alt="itemIndex" src="./screenshots/home.png">
</p>

## Register

<p align="center">
  <img height=400 alt="itemIndex" src="./screenshots/Register.png">
</p>

## Explore

<p align="center">
  <img height=400 alt="itemIndex" src="./screenshots/Explore.png">
</p>

## Profile


<p align="center">
  <img height=400 alt="itemIndex" src="./screenshots/Profile.png">
</p>

## Show

<p align="center">
  <img height=400 alt="itemIndex" src="./screenshots/Show.png">
</p>

## Brief



## Technologies Used

* CSS3

* JavaScript (ECMAScript 6)

* Git

* GitHub

* Google Fonts

* EJS

* mongoose

* express


## Featured Piece of Code

To allow users to 'follow' another individual when visiting their profile, only if they do not already follow them.
```[javascript]
  <% if(locals.isLoggedIn) { %>
    <% if(locals.currentUser.username !== username && !followers.filter(id => id.toString() === locals.currentUser._id.toString()).length) { %>
      <form style="display: inline-block" action='/user/<%= _id %>/follow/<%= locals.currentUser._id %>' method='POST'>
        <button class="button is-rounded">Follow</button>
      </form>
      <% } %>
      <%  } %>
}
```

## Styling

I used two Google Fonts:  

## Wins and Blockers

NOTES:

## Future Features

There are endless things that I could imagine adding to this project, but at the top of my list would be:

  - Rather than hiding the follow button after following a user, I would like to add an 'Unfollow' button. I understand they logic for how this would work but due to time constraints did not have time to do this.

  - I would like to add a newsfeed page which prints your own posts and the posts of  people that you follow in chronological order with the most recent at the top (contrary to the explore page which shows all posts by all users).

  - Since I was focusing on functionality, I didn't get to spend as much time on the styling or UX considerations as I would have liked too. In future, I would like to improve upon the design and introduce a more unique colour scheme.
