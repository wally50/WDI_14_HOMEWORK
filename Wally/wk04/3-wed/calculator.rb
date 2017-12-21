# Calculator requirements at bottom of program

require 'pry'

operand = ''
further_op = "z"
num3 = "0".to_f

while operand != 'q'

  if further_op == "a"
    puts 'Do something further with result? y or n'
    further_op = gets.chomp
    if further_op == "y"
      num1 = num3
    else
      puts " "
      puts "Go again."
      puts " "
    end
  end
  puts " "
  puts 'Which operation?'
  puts ' + - addition.'
  puts ' - - subtraction.'
  puts ' * - multiplication.'
  puts ' / - division.'
  puts ' ^ - exponent (power of).'
  puts ' r - nth root.'
  puts ' ! - factorial'
  puts ' rcp- reciprocal'
  puts ' dr - degrees to radians'
  puts ' q - quit.'

  operand = gets.chomp

  if operand == 'q'
    abort
  end

  if further_op == "y" && (operand == "rcp" || operand == "!" || operand == "dr")
        num1 = num3
  else
    if further_op == "y"
          puts 'Enter a number.'
      num2 = gets.chomp.to_f
    else
      if operand == '!'
        puts 'Enter a number.'
        num1 = gets.chomp.to_f
      elsif operand == 'rcp'
        puts 'Enter a number.'
        num1 = gets.chomp.to_f
      elsif operand == 'dr'
        puts 'Enter a number.'
        num1 = gets.chomp.to_f
      else
        puts 'Enter first number.'
        num1 = gets.chomp.to_f
        puts 'Enter second number.'
        num2 = gets.chomp.to_f
      end
    end
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
    num3 = num1 + num2
    puts "#{num1} + #{num2} = #{num3}"
  elsif operand == '-'
    num3 = num1 - num2
    puts "#{num1} - #{num2} = #{num3}"
  elsif operand == '*'
    num3 = num1 * num2
    puts "#{num1} * #{num2} = #{num3}"
  elsif operand == '/'
    num3 = num1 / num2
    puts "#{num1} / #{num2} = #{num3}"
  elsif operand == '^'
    num3 = num1 ** num2
    puts "#{num1} ** #{num2} = #{num3}"
  elsif operand == 'r'
    num3 = (num1 ** (1/num2)).round(1)
    puts "#{num1} ** 1/#{num2} = #{num3}"
  elsif operand == '!'
    num3 = fact(num1)
    puts "#{num1}! = #{num3}"
  elsif operand == 'rcp'
    num3 = (1/num1).round(2)
    puts "1/#{num1} = #{num3}"
  elsif operand == 'dr'
    num3 = num1*(Math::PI)/180
    puts "#{num1} deg = #{num3} rad"
  end
  further_op = "a"
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
