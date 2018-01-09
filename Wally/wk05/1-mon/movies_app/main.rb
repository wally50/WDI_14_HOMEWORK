
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require "pry"

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/available_movies' do
  film = params[:film]
  result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&s=#{film}").parsed_response
  @search = result["Search"]
  erb :available_movies
end

get '/movie' do
  # film = params[:film]
  # film = name["Title"]
  result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{params[:film]}")
  @movieTitle = result.parsed_response["Title"]
  @moviePlot = result.parsed_response["Plot"]
  @moviePoster = result.parsed_response["Poster"]
  @movieTime = result.parsed_response["Runtime"]
  erb :movie
end

# Movies I
#
# Specification
#
# Build a search form that lets the user enter a movie name. The Sinatra app will use HTTParty to fetch the data for the chosen movie from OMDB and display it on the page.
#
# Build a Sinatra application
# Include:
# app.rb
# views/layout.erb
# views/index.erb
# views/movie.erb
# views/about.erb
# public/css/style.css
# example httparty usage
#
# require 'httparty'
# result = HTTParty.get('http://omdbapi.com/?t=once')
# result.parsed_response
#
# Additional Resources
#
# demo
# Open movie database API
# sinatrarb

# Movies_2
#
# A more advanced version of the Movies Sinatra App
# Summary
#
# The students will update their movies app to allow users to search the database of movies.
#
# Specification
#
# Instead of returning a single title, the OMDb API allows you t do a search which will return multiple titles.
#
# For example if you search on Jaws, you will get a list like the following:
#
# Jaws
# Jaws 2
# Jaws 3-D
# Jaws Special
# Jaws Wired Shut
# Update your app to allow users to enter a search for movies, and to show the list as a set of links. Users should then be able to click on the link and go to the movie-etails page (like in your existing app).
#
# Extra credit:
#
# Consider updating the search functionality so that if you just get one movie back - you don't show the list but take the user straight to the page that shows the information (fewer clicks makes for better user experience).
#
# Extra extra credit:
#
# Everytime a user does a search save the movie searched into a file called search_history.txt
#
# add an extra path '/history' that list out all search history


# binding.pry
puts 'program paused'
