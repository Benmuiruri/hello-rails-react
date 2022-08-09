# Populates the database with 5 greetings 

Greeting.create!(text: 'Hello from England!')
Greeting.create!(text: 'Habari from Kenya!')
Greeting.create!(text: 'Hola from Spain!')
Greeting.create!(text: 'Konichiwa from Japan')
Greeting.create!(text: 'Ciao from Italy')

p "Added #{Greeting.count} greetings to the database"