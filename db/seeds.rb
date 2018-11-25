Item.destroy_all
item = Item.new(name: 'item1', image_url: 'images/cloth_1.jpg')
item.save!
