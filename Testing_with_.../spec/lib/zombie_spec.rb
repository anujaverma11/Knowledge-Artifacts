require 'spec_helper'
require 'lib/zombie'


describe "A Zombie" do  # name of the class
  it "is named Ash" do
    zombie = Zombie.new
    zombie.name.should == 'Ash'   ## This is an expectation
  end


  it "has no brains" do
    zombie = Zombie.new
    zombie.brains.should < 1   ## Should is a matcher // '<' is a modifier
  end


end

# To execute this on commonad line

# rspec spec/lib/zombie_spec.rb
# F

# Failures:

#   1) A Zombie is named Ash
#      Failure/Error: zombie.name.should == 'Ash'   ## This is an expectation

#      NoMethodError:
#        undefined method `name' for #<Zombie:0x007fabd287f480>
#      # ./spec/lib/zombie_spec.rb:8:in `block (2 levels) in <top (required)>'

# Finished in 0.00072 seconds (files took 0.32375 seconds to load)
# 1 example, 1 failure

# Failed examples:

# rspec ./spec/lib/zombie_spec.rb:6 # A Zombie is named Ash

