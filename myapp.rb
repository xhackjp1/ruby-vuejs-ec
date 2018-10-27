# myapp.rb
require 'sinatra'

get '/' do
  # 'Hello world!'
  erb :index
end

get '/item' do
  # 'Hello world!'
  erb :item
end
