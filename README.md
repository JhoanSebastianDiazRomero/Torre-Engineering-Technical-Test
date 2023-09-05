# Torre Engineering Test

This is my submition for the "Software Engineering Intern" role at torre. The project was developed using React.js and Vite and can be accesed on: https://torre-engineering-test-sebastian-diaz-romero.netlify.app/




## Features

- Search people on torre by name and access their genome profile
- Search with debounce
- Favorites list (add and remove functionality)
- Search history (with the latest 10 terms)




## Clarifications

 I decided to implement a "debounce" functionality in order to reduce unnecessary API calls, instead of calling the API for each keystroke, there's a small delay after the user stops typing so the API is just called once there is enough relevant information inputted by the user.
## Answer to the question

"If you had more time, what additional improvements would you have considered?"

If I had more time I would have been able to persist some relevant information like the favorites and search history so it didn't reset after re-entering the application. Also, it isn't that relevant to have those functionalities without relating them to a specific user, so I would have created an authentication functionality so each user can have different favorites and search history.

I wanted to create my custom genome page view but due to time constraints I was only able to link to the one from torre.

There is also a lot of data that wasn't necessary for a project like this, but it would be really interesting to get some insights relevant to each user based on that information and correlate it with different job offers.
