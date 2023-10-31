# gameU

post model
user model
comment
game

one post has one game

search games
when logged in ability to make posts and comments
raw g api (parental) query params to only get e-m rating
steam api (parental)
stick to console games

misspelling

in post route have the api call

api calls happen in public js "template based"
in handlebars, put script /js/game-api.js 


post belongs to user

user has many post


post has many comments

comment belongs to user
comment belongs to post


game has many posts

post belongs to game



user needs:
id - int
name - string
email - string (validate is email)
password - string

`password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },`

post needs:
id - int
title - string
content -string
system - string
game_id key
user_id key

game needs:
id -int 
title -string
image - string for url
slug - string (api call uses 'slug' as unique identifier) hidden value attribute (or custom data attribute 04-20 put name in div)




comment needs:
id - int
content - string
user_id key
post_id key



<!-- *14-10-edit js in public folder -->
<!-- SMU-VIRT-FSF-FT-09-2023-U-LOLC\14-MVC\01-Activities\10-Stu_Handlebars-FE-Logic\Solved\public\js\edit-dish.js -->

<!-- api 06-10 -->

home routes get

api routes post put delete