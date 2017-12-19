require 'pry'


#Starting with the following array...

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

#Access the second value in planeteers.
planeteers[1]

#Add "Heart" to the end of planeteers.
planeteers.push("Heart")

#Remove "Captain Planet" from the array (without using a method).
planeteers - [planeteers[2]]

#Combine planeteers with rangers and save the result in a variable called heroes.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers + rangers


#Alphabetize the contents of heroes using a method.
heroes.sort!

#Randomize the contents of heroes using a method.
heroes.sort_by{ rand }

#Select a random element from heroes using a method
heroes.sample

#Select all elements in heroes that begin with "B" using a method
def elements_starting_with(heroes,"B")
  heroes.select { |str| str.start_with?("B") }
end


#Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.

ninja_turtle = {
  name: "Michelangelo",
  weapon:  "Nunchuks",
  radical: true
}

#AAdd a key age to ninja_turtle. Set it to whatever numerical value you'd like.
ninja_turtle[:age] = 7

#Remove the radical key-value pair from ninja_turtle.
ninja_turtle.delete(:radical)

#Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]

#Access the first element of pizza_toppings.
ninja_turtle[:pizza_toppings][0]

#Produce an array containing all of ninja_turtle's keys using a method.
ninja_turtle.keys

#Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method.
ninja_turtle.each do |key,value|
  puts (key.to_s  + " is equal to: " + value.to_s)
end



binding.pry

puts 'program paused'
