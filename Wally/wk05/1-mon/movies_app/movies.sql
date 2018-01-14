
CREATE DATABASE dbname

\c dbname

CREATE TABLE movies_local (
  id SERIAL PRIMARY KEY,
  movie_name VARCHAR (300),
  omdb_id VARCHAR (30),
  movie_year VARCHAR (50),
  movie_length VARCHAR (50),
  movie_plot VARCHAR (1000),
  image_url VARCHAR(400
  )
);

INSERT INTO movies_local (movie_name,ombd_id, movie_year, movie_length, image_url) VALUES ('pudding', 'tt12345', 2000, 120, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--2671_11.jpg?itok=CNcwtxB0' );

-- RUBY

get '/' do
  erb: index
end



class Movie
  self.find(movie_id)

    conn = PG.connect(dbname: 'movies_db')
    sql = "SELECT * FROM movies_local WHERE omdb_id = ("#{params[:film]}");"
    @movie = conn.exec(sql).first
    conn.close
    erb: movie_local if @movie["id"]

  end




end

-- TEST CODE --
-- result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&s=speed").parsed_response
--
-- result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&s=jaws")
--
-- result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=jaws")
--
-- @movie = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&i=tt0077766”).parsed_response["Title"]
--
-- require 'httparty'
--
-- @movie  = "SELECT * FROM movies_local WHERE omdb_id = ("#{params[:film]}");"
--
-- @movie  = "SELECT * FROM movies_local WHERE omdb_id = ('tt0073195');"
.gsub(/[^a-z0-9\s]/i, '')

conn = PG.connect(dbname: 'movies_db')
sql = "SELECT * FROM movies_local WHERE omdb_id = ('tt0000000');"
@movie = conn.exec(sql).first
conn.close


get '/db_search' do
  -- # film = params[:film]
  -- # film = name["Title"]
  -- result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&i=#{params[:film]}")
  --    puts "movie omdbid is #{params[:film]}"
  -- @movieTitle = result.parsed_response["Title"]
  -- @moviePlot = result.parsed_response["Plot"]
  -- @moviePoster = result.parsed_response["Poster"]
  -- @movieTime = result.parsed_response["Runtime"]
  -- @movieYear = result.parsed_response["Year"]
  -- @movieId = result.parsed_response["imdbID"]
-- # store in psql database
  conn = PG.connect(dbname: 'movies_db')
  sql movies_local.find("#{params[:film]}")


  -- sql = "INSERT INTO movies_local (movie_name, omdb_id, movie_year, movie_length, image_url) VALUES ('#{@movieTitle.gsub(/[^a-z0-9\s]/i, '')}', '#{params[:film]}', '#{@movieYear}', '#{@movieTime}', '#{@moviePoster}');"
  conn.exec(sql)
  conn.close

  erb :movie
end
