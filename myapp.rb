# myapp.rb
require 'sinatra'

get '/' do
  erb :index
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

  items.to_json
end
