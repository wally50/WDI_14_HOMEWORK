#1. Create an array of the days of the week

#Create a variable named days_of_the_week as an array of the following:
#Monday
#Tuesday
#Wednesday
#Thursday
#Friday
#Saturday
#Sunday
#2. My calendar says the first day is Sunday...

#Remove Sunday from the last postion and move it to the first position. Use array methods.
#3. Create a new array of the days of the week:

#The first inner array should be the weekdays
#The second inner array should be the weekend days
#4. Remove either the weekdays or the weekends

#Your choice...

#5. Sort the remaining days alphabetically

require 'pry'
#1
days_of_the_week = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
puts (days_of_the_week)
#2
temp = days_of_the_week.pop
days_of_the_week.unshift(temp)
puts("2 .... days of the week")
puts (days_of_the_week)
#3
temp = days_of_the_week.shift
days_of_the_week = days_of_the_week.push(temp)
weekdays = days_of_the_week.shift(5)
weekend_days = days_of_the_week
week = [weekdays , weekend_days]
puts ("3 .... Weekdays")
puts (weekdays)
puts ("3 .... Weekend days")
puts ( weekend_days)
puts ("3 .... Week")
puts (week)
#4
days_of_week = week.shift
puts ("4 .... days of week, weekend removed")
puts (days_of_week)
#5
puts ("5 .... alpha days of week")
puts (days_of_week.sort!)














#


#
