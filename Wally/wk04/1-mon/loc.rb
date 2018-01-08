#line of code
#write a program loc.rb to count and puts the number of lines of code in a file

#eg. say you have a file data.txt with the following contents

#cat
#dog
#rabbit
#when I run the program, it should prompt for a filename

#> ruby loc.rb
#> Enter filename: data.txt
#> 3 line(s)

require 'pry'

puts ("Enter filename:")
filename = gets.chomp
filename_array = IO.readlines(filename)
number_of_lines = filename_array.length.to_s
puts (number_of_lines + " line(s)")
result = File.new("data_result.txt", "a")  #creates new file
result.close
File.open("data_result.txt", "w+") { |file|  file.write(number_of_lines + " line(s)") } # opens file and writes to the file.
