
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

get '/movie' do
  film = params[:film]
  result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{film}")
  @movieTitle = result.parsed_response["Title"]
  @moviePlot = result.parsed_response["Plot"]
  @moviePoster = result.parsed_response["Poster"]
  @movieTime = result.parsed_response["Runtime"]
  erb :movie
end


# binding.pry
puts 'program paused'
