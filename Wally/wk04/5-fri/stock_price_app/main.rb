
require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
#require 'pry'

get '/' do
#symbol = params["symbol"]
#<h1>Stock Price</h1>

stock = StockQuote::Stock.quote("msft")

puts "stock"
#binding.pry

# stock = StockQuote::Stock.quote("#{symbol}")

@stock_symbol = stock.symbol
@stock_name = stock.name
@stock_last_sale_price = stock.last

erb(:index)
end

get '/about' do
  "goodbye to yahoo finance"
end

#binding.pry
#puts 'program paused'
