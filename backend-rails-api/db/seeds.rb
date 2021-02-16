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

#https://thedogapi.com/v1/images?api_key=
#https://docs.thedogapi.com
api_key = 'b381884d-c35c-45db-9b63-da84c9d8d80e'
# url = 'https://api.thedogapi.com/v1/images/search?api_key=b381884d-c35c-45db-9b63-da84c9d8d80e'
# # url = 'https://api.thedogapi.com/v1/images/search'
# response = RestClient.get(url)

# parsed_body = JSON.parse(response)

# parsed_body.each { |current_data|
#     puts current_data   
#     # breedName = current_data[0]["breeds"][0]["name"]
#     # dogImage = current_data[0]["url"]
#     # Animal.create(name: Faker::Creature::Dog.name, breed: breedName, image: dogImage)
# }


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


# Faker::Creature::Dog.breed
# createDog(parsed_body){

