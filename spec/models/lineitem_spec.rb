require 'rails_helper'
require 'spec_helper'

describe Lineitem do
  it { should belong_to :user}
  it { should belong_to :month}

  it { should have_valid(:category).when("income", "expense", "Income", "Expense") }
  it { should_not have_valid(:category).when(nil,"") }

  it { should have_valid(:lineitem).when("Paycheck") }
  it { should_not have_valid(:lineitem).when(nil,"") }

  it { should have_valid(:value).when(1000) }
  it { should_not have_valid(:value).when(nil,"") }
end
