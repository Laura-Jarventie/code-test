# Task:

- Present an article list, food recipe contents, job announcements or shopping cart
- Present a single item in more detail
- User can add more items to this list and delete existing ones
- Get data from a backend (mock or fake)

### Deployed project
Can be found here: https://laura-jarventie.github.io/code-test

## This is application build with React.

For the state management, I have used build in react hooks. 
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Packages to install

- react-bootstrap
- axios
- react-router-dom

## Structure:

There are three main components: header, main and footer.

Main is divided into two pages: Home and Recipes

Recepy page consist: 

Actual recepy list are all posts from fake backend: https://jsonplaceholder.typicode.com/posts This renders userID and title.

Each post has link to see more detail a particular post (Recepy Single) and that will show whole post with userID, title and body.

Each post has also delete button. 

RecepyNew creates a new recipe to database.

Note! As I use fake database, post and delete are not actually working. That is why there is prompt message showing that correct recipes are added or created if the database would be real.




