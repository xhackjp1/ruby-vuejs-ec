# myapp.rb
require 'sinatra'
require "sinatra/activerecord"
require 'payjp'
require './models/item.rb'


set :secret_key, ENV['SECRET_KEY']
set :public_key, ENV['PUBLIC_KEY']

Payjp.api_key = settings.secret_key

configure do
  set :erb, escape_html: true
end

get '/' do
  erb :index
end

get '/card' do
  erb :card
end

post '/pay' do
  puts "支払い"
  amount = 1000
  customer = Payjp::Customer.create(
    :email => 'example@pay.jp',
    :card  => params['payjp-token']
  )
  Payjp::Charge.create(
      :amount => amount,
      :currency => 'jpy',
      :customer => customer.id,
      :description => 'Sinatra example charge'
  )
  erb :pay, :locals => {:amount => amount}
end

get '/index' do
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

get '/contact' do
  erb :contact
end

get '/checkout' do
  erb :checkout
end

get '/thankyou' do
  erb :thankyou
end

get '/api/categoryList' do
  categories = {
    categories: [
      {
        image_url: "images/women.jpg",
        categoryName: "Women"
      },
      {
        image_url: "images/children.jpg",
        categoryName: "Children"
      },
      {
        image_url: "images/men.jpg",
        categoryName: "Men"
      },
    ]
  }

  categories.to_json
end

get '/api/itemList' do
  items = {
    items: [
      {
        name: "item1",
        price: "2000",
        image_url: "images/cloth_1.jpg",
      }, {
        name: "item2",
        price: "2500",
        image_url: "images/cloth_2.jpg",
      }, {
        name: "item3",
        price: "3000",
        image_url: "images/cloth_3.jpg",
      }, {
        name: "item1",
        price: "2000",
        image_url: "images/cloth_1.jpg",
      }, {
        name: "item2",
        price: "2500",
        image_url: "images/cloth_2.jpg",
      }, {
        name: "item3",
        price: "3000",
        image_url: "images/cloth_3.jpg",
      }, {
        name: "item1",
        price: "2000",
        image_url: "images/cloth_1.jpg",
      }, {
        name: "item2",
        price: "2500",
        image_url: "images/cloth_2.jpg",
      }, {
        name: "item3",
        price: "3000",
        image_url: "images/cloth_3.jpg",
      }
    ]
  }

  # items.to_json
  Item.all.to_json

  # items = Item.all
  # items.all.each do |item|
  #   item['price'] = Price.find(item.price_id)
  # end
  # items.to_json
end
