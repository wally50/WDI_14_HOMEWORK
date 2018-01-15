require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
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
# check local PG data base - movies_db
  nada = true
  conn = PG.connect(dbname: 'movies_db')
  sql = "SELECT * FROM movies_local WHERE omdb_id = ('#{params[:film]}');"
  @movie = conn.exec(sql).first
  nada = false if @movie.nil?
  if nada && (@movie["omdb_id"].include? "#{params[:film]}")
    @moviePoster = "#{@movie["image_url"]}"
    @movieTitle = "#{@movie["movie_name"]}"
    @moviePlot = "#{@movie["movie_plot"]}"
    @movieTime = "#{@movie["movie_length"]}"
    conn.close
    erb :movie
  else
  # retrieve from omdb if not in local db
    result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&i=#{params[:film]}")
    @movieTitle = result.parsed_response["Title"]
    @moviePlot = result.parsed_response["Plot"]
    @moviePoster = result.parsed_response["Poster"]
    @movieTime = result.parsed_response["Runtime"]
    @movieYear = result.parsed_response["Year"]
  # store in psql database
    conn = PG.connect(dbname: 'movies_db')
    sql = "INSERT INTO movies_local (movie_name, omdb_id, movie_year, movie_length, movie_plot, image_url) VALUES ('#{@movieTitle.gsub(/[^a-z0-9\s]/i, '')}', '#{params[:film]}', '#{@movieYear}', '#{@movieTime}', '#{@moviePlot.gsub(/[^a-z0-9\s]/i, '')}', '#{@moviePoster}');"
    conn.exec(sql)
    conn.close
    erb :movie
  end
end

# binding.pry
# puts 'program paused'

##### Movies I #####
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
# Instead of returning a single title, the OMDb API allows you to do a search which will return multiple titles.
#
# For example if you search on Jaws, you will get a list like the following:
#
# Jaws
# Jaws 2
# Jaws 3-D
# Jaws Special
# Jaws Wired Shut
# Update your app to allow users to enter a search for movies, and to show the list as a set of links. Users should then be able to click on the link and go to the movie-details page (like in your existing app).
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

# Movies 3: Return of Son of Movies
# A more more advanced version of the Movies Sinatra App
#
# Summary
# The people at OMDB have complained that our site is making too many requests for Jaws. Update your movies app to store OMDB data in your own local database.
#
# The first time a movie is searched for, your app will put results from OMDB as before. But those results will need to be stored locally so that subsequent requests for the same title can be served from YOUR database, without bothering the OMDB guys again.
