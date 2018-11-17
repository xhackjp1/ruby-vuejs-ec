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

get '/api/itemList' do
  article = {
    id: 1,
    title: "today's dialy",
    content: "It's a sunny day.",
    items: [
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

  article.to_json
end
