class Animal < ApplicationRecord
    has_many :likes 
    has_many :users, through: :likes, dependent: :destroy
end
