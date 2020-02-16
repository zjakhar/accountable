require 'rails_helper'

RSpec.describe Api::V1::MonthsController, type: :controller do
  describe "Get#index" do
    let!(:user) { User.create(
      id:1,
      first_name: "John",
      last_name: "Doe",
      email: "email@email.com",
      role: "member",
      password: "123456"
    ) }
    let!(:first_month) { Month.create(
      month: "January",
      user: user
    ) }
    let!(:second_month) { Month.create(
      month: "February",
      user: user
    ) }

    it "should return a list of month(s)" do
      sign_in user
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 2

      expect(returned_json[0]["month"]).to eq "January"
      expect(returned_json[1]["month"]).to eq "February"
    end
  end

describe "Get#show" do
  let!(:user) { User.create(
    id:1,
    first_name: "John",
    last_name: "Doe",
    email: "email@email.com",
    role: "member",
    password: "123456"
  ) }
  let!(:first_month) { Month.create(
    month: "January",
    user: user
  ) }
  let!(:second_month) { Month.create(
    month: "February",
    user: user
  ) }

  it "should return the month January" do
    sign_in user
    get :show, params: {id: first_month.id}
    returned_json = JSON.parse(response.body)

    expect(response.status).to eq 200
    expect(response.content_type).to eq ("application/json")
    expect(returned_json["month"]).to eq "January"
  end
  it "should return the month February" do
    sign_in user
    get :show, params: {id: second_month.id}
    returned_json = JSON.parse(response.body)

    expect(response.status).to eq 200
    expect(response.content_type).to eq ("application/json")
    expect(returned_json["month"]).to eq "February"
  end
end

  describe "POST#create" do
    context 'when a successful month addition is made with the correct params' do
      let!(:user) { User.create(
        id:1,
        first_name: "John",
        last_name: "Doe",
        email: "email@email.com",
        role: "member",
        password: "123456"
      ) }

      let!(:new_month_hash) { { month:"January", user: user} }

      it "creates a new month" do
        sign_in user

        expect{ post :create, params: new_month_hash, format: :json }.to change { Month.count }.from(0).to(1)
      end

      it "returns the new month as JSON" do
        sign_in user
        post :create, params: new_month_hash, format: :json

        response_body = JSON.parse(response.body)
        expect(response_body["month"]).to eq "January"
      end
    end
  end

end
