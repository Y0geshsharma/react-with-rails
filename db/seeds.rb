# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

course = Course.create(Title:'lets start', Description:'ruby on rails with react')

level = Level.create(Title:'chapter', Description:'test', courses: course) 

episode = Episode.create([
        {Title: "Introduction to reat", Description: "check out more official doc for more",url: 'https://www.youtube.com/embed/6ACq2QXgGDI',levels: level},
        {Title: "Data binding in React", Description: "check out more official doc for more",url: 'https://www.youtube.com/embed/6ACq2QXgGDI' ,levels: level},
        {Title: "Components in React", Description: "check out more official doc for more",url: 'https://www.youtube.com/embed/6ACq2QXgGDI',levels: level},
        {Title: "States in react", Description: "check out more official doc for more",url: 'https://www.youtube.com/embed/6ACq2QXgGDI',levels: level},
        {Title: "Props in react", Description: "check out more official doc for more",url: 'https://www.youtube.com/embed/6ACq2QXgGDI',levels: level}

]) 