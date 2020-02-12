require 'rails_helper'
require 'spec_helper'

describe Month do

  it { should belong_to :user }

  it { should have_valid(:month).when("January") }
  it { should_not have_valid(:month).when(nil, "") }

end
