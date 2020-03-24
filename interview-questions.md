# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: Animal_id, this foreign key would live in the Sightings model.

  Researched answer:



2. Which routes must always be passed params and why?

  Your answer: Any route that needs to access to a foreign key will need to be passed that parameter.

  Researched answer: New, Update, and Delete routes since they all need the ID paramater.



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:

get '/main/:guess' => 'game#show', as: 'game'



4. Name three rails generator commands. What is created by each?
# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: Animal_id, this foreign key would live in the Sightings model.

  Researched answer: Double checking how we had this setup in our challenge and here is the code in the sightings_controller.rb file.

class Sighting < ApplicationRecord
  belongs_to :animal
end



2. Which routes must always be passed params and why?

  Your answer: Any route that needs to access to a foreign key will need to be passed that parameter.

  Researched answer: New, Update, and Delete routes since they all need the ID paramater.



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:

get '/main/:guess' => 'game#show', as: 'game'



4. Name three rails generator commands. What is created by each?

  Your answer: Resources

  Researched answer: Controller, Model, Migration

Controller creates a new Controller class and a boilerplate definition, view, and HTML file.

Model creates a new model class and basic definition.

Migration creates a new migration file.


5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"   Return all users

/users/1      method="GET"   Return the user with an id of 1

/users/new    method="GET"   Add new user on this page

/users/       method="POST"  User is added to the database

/users/1      method="PUT"   Update user with an id of 1 

/users/1      method="DELETE" Remove user with an id of 1

  Your answer: Resources

  Researched answer: Controller, Model, Migration

Controller creates a new Controller class and a boilerplate definition, view, and HTML file.

Model creates a new model class and basic definition.

Migration creates a new migration file.


5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"   Return all users

/users/1      method="GET"   Return the user with an id of 1

/users/new    method="GET"   C

/users/       method="POST"     

/users/1      method="PUT"    

/users/1      method="DELETE" Remove user with an id of 1


GET    /items        #=> index
GET    /items/1      #=> show
GET    /items/new    #=> new
GET    /items/1/edit #=> edit
PUT    /items/1      #=> update
POST   /items        #=> create
DELETE /items/1      #=> destroy