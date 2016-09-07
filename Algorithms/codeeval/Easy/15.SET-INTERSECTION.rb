# You are given two sorted list of numbers (ascending order). The lists themselves are comma delimited and the two lists are semicolon delimited. Print out the intersection of these two sets.

# INPUT SAMPLE:

# File containing two lists of ascending order sorted integers, comma delimited, one per line. E.g.
# 1,2,3,4;4,5,6
# 20,21,22;45,46,47
# 7,8,9;8,9,10,11,12
# OUTPUT SAMPLE:

# Print out the ascending order sorted intersection of the two lists, one per line. Print empty new line in case the lists have no intersection. E.g.
# 4

# 8,9
# File.open(ARGV[0]).each_line do |line|
#     line = line.split(";")
#     array1 = line[0].split(",")
#     array2 = line[1].split(",")
#     common = (array1 & array2).map{|s| s.to_i}
#     if common.length == 0
#         puts '-'
#     else
#         common = common.sort!
#         puts common.join(",")
#     end
# end

File.open(ARGV[0]).each_line do |line|
    line = line.split(';');
    set = line.map { |nums| nums.split(',').map(&:to_i) }
    puts set.inject(:&).join(',') if set.size == 2
end



