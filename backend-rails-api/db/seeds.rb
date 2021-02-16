# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'rest-client'
require 'json'
require 'pry'
require 'faker'

Animal.destroy_all
User.destroy_all

#api_key = 'b381884d-c35c-45db-9b63-da84c9d8d80e'

10.times do 
    url = 'https://api.thedogapi.com/v1/images/search?api_key=b381884d-c35c-45db-9b63-da84c9d8d80e'
    response = RestClient.get(url)
    parsed_body = JSON.parse(response)
    # binding.pry
    # breedName = parsed_body[0]["breeds"][0]["name"]
    dogImage = parsed_body[0]["url"]
    Animal.create(name: Faker::Creature::Dog.name, breed: Faker::Creature::Dog.breed, image: dogImage)
end

5.times do
    User.create(name: Faker::FunnyName.name, age: Faker::Number.within(range: 15..99), location: Faker::Movies::LordOfTheRings.location)
end

like_a = Like.create(animal_id: 1, user_id: 1)
like_b = Like.create(animal_id: 2, user_id: 2)
like_c = Like.create(animal_id: 4, user_id: 3)
like_d = Like.create(animal_id: 4, user_id: 4)
like_e = Like.create(animal_id: 8, user_id: 5)

