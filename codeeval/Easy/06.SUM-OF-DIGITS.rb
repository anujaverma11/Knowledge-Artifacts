# Given a positive integer, find the sum of its constituent digits.

# INPUT SAMPLE:

# The first argument will be a path to a filename containing positive integers, one per line. E.g.

# 23
# 496
# OUTPUT SAMPLE:

# Print to stdout, the sum of the numbers that make up the integer, one per line. E.g.

# 5
# 19

File.open(ARGV[0]).each_line do |line|
  sum = 0
  line.each_char { |digit| sum += digit.to_i}
  p sum
end
