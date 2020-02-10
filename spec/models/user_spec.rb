require 'rails_helper'
require 'spec_helper'

describe User do

  it { should have_valid(:first_name).when("Zain") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:last_name).when("Doe") }
  it { should_not have_valid(:last_name).when(nil, "") }

  it { should have_valid(:email).when("zain@email.com") }
  it { should_not have_valid(:email).when(nil, "", "zain@", "zain", "zain.com") }

  it { should have_valid(:encrypted_password).when("password", "123456", "passwordisverylong123") }
  it { should_not have_valid(:encrypted_password).when(nil, "", "short") }

end
