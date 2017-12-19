require 'pry'

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]


planeteers[1]

planeteers.push("Heart")




heroes = planeteers + rangers

heroes.sort!

heroes.sort_by{ rand }






binding.pry

puts 'program paused'
