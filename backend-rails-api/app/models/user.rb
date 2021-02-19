class User < ApplicationRecord
   # has_one_attached :image
    has_many :likes 
    has_many :animals, through: :likes
end
