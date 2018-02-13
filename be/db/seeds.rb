# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
Event.create!(start: DateTime.now - 5.days, end: DateTime.now + 5.days, event_type: 'work_shop', title: 'Home Depot', description: 'Lorem Ipsum', age_start: 3, age_end: 18)