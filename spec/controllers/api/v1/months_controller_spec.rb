require 'rails_helper'

RSpec.describe Api::V1::MonthsController, type: :controller do
  describe "Get#index" do
    let!(:user) { User.create(
      id:1,
      first_name: "John",
      last_name: "Doe",
      email: "email.email.com",
      role: "member",
      password: "123456"
      ) }
    let!(:first_month) { Month.create(
      month: "January",
      user: user
      ) }
    let!(:first_month) { Month.create(
      month: "February",
      user: user
      ) }

      it "should return a list of month(s)" do
        get :index
        returned_json = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(response.content_type).to eq("application/json")
      end
  end
end
