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

#https://thedogapi.com/v1/images?api_key=
#https://docs.thedogapi.com
api_key = 'b381884d-c35c-45db-9b63-da84c9d8d80e'
#url = 'https://api.thedogapi.com/v1/images?api_key=b381884d-c35c-45db-9b63-da84c9d8d80e'
url = 'https://api.thedogapi.com/v1/images/search'
response = RestClient.get(url)
<<<<<<< HEAD

parsed_body = JSON.parse(response)
binding.pry

10.times 

def functionName(parsed_body){
    breedName = parsed_body[0]["name"]

    Animal.create(name: breed image)
}
=======
JSON.parse(response)
binding.pry

















Faker::Creature::Dog.name
Faker::Creature::Dog.age
>>>>>>> faker
