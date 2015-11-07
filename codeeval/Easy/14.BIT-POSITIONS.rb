# Given a number n and two integers p1,p2 determine if the bits in position p1 and p2 are the same or not. Positions p1 and p2 are 1 based.

# INPUT SAMPLE:

# The first argument will be a path to a filename containing a comma separated list of 3 integers, one list per line. E.g.

# 86,2,3
# 125,1,2
# OUTPUT SAMPLE:

# Print to stdout, 'true'(lowercase) if the bits are the same, else 'false'(lowercase). E.g.
# true
# false


File.open(ARGV[0]).each_line do |line|
  line = line.split(",")
  number = line[0].to_i
  position1 = line[1].to_i
  position2 = line[2].to_i
  binary = number.to_s(2)

  if (binary[-position1] == binary[-position2])
          p true
  else
          p false
  end
end
