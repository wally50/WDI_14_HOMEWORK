# Calculator requirements at bottom of program

require 'pry'

operand = ''

while operand != 'q'

  puts 'Which operation?'
  puts ' + - addition.'
  puts ' - - subtraction.'
  puts ' * - multiplication.'
  puts ' / - division.'
  puts ' ^ - exponent (power of).'
  puts ' r - nth root.'
  puts ' ! - factorial'
  puts ' rcp- reciprocal'
  puts ' q - quit.'

  operand = gets.chomp

  if operand == 'q'
    abort
  end

  if operand == '!'
    puts 'Enter a number.'
    num1 = gets.chomp.to_f
  elsif operand == 'rcp'
    puts 'Enter a number.'
    num1 = gets.chomp.to_f
  else
    puts 'Enter first number.'
    num1 = gets.chomp.to_f
    puts 'Enter second number.'
    num2 = gets.chomp.to_f
  end

  def fact(n)
    if n<= 1
      1
    else
      n * fact( n - 1 )
    end
  end

  puts ''
  if operand == '+'
    puts "#{num1} + #{num2} = #{num1 + num2}"
  elsif operand == '-'
    puts "#{num1} - #{num2} = #{num1 - num2}"
  elsif operand == '*'
    puts "#{num1} * #{num2} = #{num1 * num2}"
  elsif operand == '/'
    puts "#{num1} / #{num2} = #{(num1 / num2).round(1)}"
  elsif operand == '^'
    puts "#{num1} ** #{num2} = #{num1 ** num2}"
  elsif operand == 'r'
    puts "#{num1} ** 1/#{num2} = #{(num1 ** (1/num2)).round(1)}"
  elsif operand == '!'
    puts "#{num1}! = #{fact(num1)}"
  elsif operand == 'rcp'
    puts "1/#{num1} = #{(1/num1).round(2)}"
  end
  puts ''
end

binding.pry
puts 'program paused'

# Calculator
# Explanation
#
# You will be building a CLI calculator. Which means it will be a command line text based program. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Phase 3
#
# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality
# Optional Extensions
#
# Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4
