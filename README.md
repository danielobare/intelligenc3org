# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

3.1.2 but some of the gem files required older versions of Ruby which if used would result in newer dependency issues.

I however experienced issues working with webpacker to get my front end working. Difficulties in unmet dependencies with miniset that could not be fixed without interfering with other working parts. I resorted to a simple react app that I have added in the folder 'front end'

I chose the webpacker way for my front end but since it is not supported anymore since the start of 2022, dependency issues arose. Was stuck trying to solve the issue and in the end opted for a standalone react app (that I have not fully implemented. it only has the homepage, some routes and a form.)

* System dependencies

* Configuration

'rails s' to start the backend server and the front if it ended up working well

* Database creation

rake db:create

* Database initialization

##

* How to run the test suite
For the react front end in 'front end' folder, run
 
npm install then npm start

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

deploys to default server if not specified

* ...
