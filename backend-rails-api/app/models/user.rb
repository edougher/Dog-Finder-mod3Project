class User < ApplicationRecord
    has_many :likes, dependent: :destroy
    has_many :animals, through: :likes
    has_one_attached :image
end
