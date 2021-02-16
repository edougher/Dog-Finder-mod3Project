class User < ApplicationRecord
    has_many :likes 
    has_many :animals, through: :likes
end
