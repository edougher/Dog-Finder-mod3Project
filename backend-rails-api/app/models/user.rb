class User < ApplicationRecord
<<<<<<< HEAD
   # has_one_attached :image
    has_many :likes 
=======
    has_many :likes, dependent: :destroy
>>>>>>> goforMVP
    has_many :animals, through: :likes
end
