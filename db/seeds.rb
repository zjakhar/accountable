# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Month.create(month:"January")

Lineitem.create!(month_id: 9, user_id: 7, category: "income", lineitem: "check", value: 4000)
Lineitem.create!(month_id: 9, user_id: 7, category: "expense", lineitem: "bill", value: 200)

Lineitem.create!(month_id: 10, user_id: 7, category: "income", lineitem: "check", value: 4000)
Lineitem.create!(month_id: 10, user_id: 7, category: "expense", lineitem: "bill", value: 300)

Lineitem.create!(month_id: 11, user_id: 7, category: "income", lineitem: "check", value: 4000)
Lineitem.create!(month_id: 11, user_id: 7, category: "expense", lineitem: "bill", value: 400)
