# myapp.rb
require 'sinatra'

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/item' do
  erb :item
end

get '/cart' do
  erb :cart
end

get '/shop' do
  erb :shop
end

get '/shop-single' do
  erb :shop-single
end

get '/contact' do
  erb :contact
end

get '/checkout' do
  erb :checkout
end

get '/thankyou' do
  erb :thankyou
end
