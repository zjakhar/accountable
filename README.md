# README
[![Codeship Status for zjakhar/accountable](https://app.codeship.com/projects/aab01060-2e52-0138-c007-6693da41f57b/status?branch=master)](https://app.codeship.com/projects/384823)

Accountable: Financial Budgeting App

By Zain Jakhar

This app helps users keep track of their montly budget.

* Ruby version
Ruby 2.6.5    

* System dependencies
  Rails, JavaScript
  
Make sure you have the most updated version of make_it_so and use it to create a Rails app:
```
gem install make_it_so
make_it_so rails <your_app_name>
```

Create your database and migrate the tables necessary for the configuration:
```
$ bundle exec rake db:create
$ bundle exec rake db:migrate
```
To start server localhost:3000
```
$ bundle install
$ rails s
```
And in another tab run the following:
```
$ yarn install
$ yarn run start
```

* How to run the test suite: (this includes, model testing, controller testing, feature testing)
Run the following in your terminal:
```
bundle exec rspec
```
```
yarn test
```

Credits

	Images:
		unsplash.com

	Icons:
		fontawesome.io
