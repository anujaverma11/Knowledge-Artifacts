# You are given a sorted list of numbers with duplicates. Print out the sorted list with duplicates removed.

# INPUT SAMPLE:

# File containing a list of sorted integers, comma delimited, one per line. E.g.

# 1,1,1,2,2,3,3,4,4
# 2,3,4,5,5
# OUTPUT SAMPLE:

# Print out the sorted list with duplicates removed, one per line.
# E.g.


# 1,2,3,4
# 2,3,4,5


File.open(ARGV[0]).each_line do |line|
  array = line.split(',')
  array[-1].chomp!
  array = array.uniq
  p array.join(',').to_s
end

File.open(ARGV[0]).each_line do |line|
  last = nil
  uniq = line.split(',').map(&:to_i).reject do |i|
    dup = (i == last)
    last = i
    dup
  end

  puts uniq.join(',')
end