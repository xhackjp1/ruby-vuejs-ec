# models/item.rb
class Item < ActiveRecord::Base
  belongs_to :price
end
