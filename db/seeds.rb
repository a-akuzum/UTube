# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(username: "aaron", email: "user1@email.com", password: "123456")
user2 = User.create!(username: "ali",email: "user2@email.com", password: "123456")
user3 = User.create!(username: "veli",email: "user3@email.com", password: "123456")