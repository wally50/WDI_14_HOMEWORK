
require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
#require 'pry'

get '/' do
symbol = params["stock"]

# stock = StockQuote::Stock.quote("msft")
stock = StockQuote::Stock.quote("#{symbol}")
# stock = StockQuote::Stock.quote("params[:symbol]")

@stock_symbol = stock.symbol
@stock_name = stock.name
@stock_last_sale_price = stock.l

erb(:index)
end

get '/about' do
  "goodbye to yahoo finance"
end

#binding.pry
#puts 'program paused'

# RIP Yahoo Finance welcome Google overlords Stock App
# Build a Sinatra App that will take a stock symbol and display the stock price
# The stock symbol e.g. APPL should be inputted via the url as query string
# The result should be rendered in the browswer with ERB.
# The background colour should be mistyrose.
# Suggested Approach
# Build a Sinatra application
#
# Include:
# main.rb
# views/index.erb
# public/styles.css
# Define a method that makes a request to the Google Finance api via the stock_quote gem.
#
# This method should take, as paramater, a stock ticker
# This method should return data about the stock
# Test this method manually in pry
# Display, for example, google's stock price when there is GET request to /?stock=APPL
#
# The file should be index.erb
# Add an about page that contains "goodbye to yahoo finance" in a paragraph.
#
# All the above should work without the need of any form input.
#
# install the google finance gem
# $ gem install stock_quote
# Example stock_quote library usage:
# require 'stock_quote'
# stock = StockQuote::Stock.quote("msft")
