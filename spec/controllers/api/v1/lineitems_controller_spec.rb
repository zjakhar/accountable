require 'rails_helper'

RSpec.describe Api::V1::LineitemsController, type: :controller do

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
      let!(:first_month) { Month.create(
        month: "January",
        user: user
      ) }

      let!(:new_lineitem_hash) { { month_id: first_month, user: user, category: "income", lineitem: "paycheck", value: 1900} }

      it "creates a new lineitem for the budget" do
        sign_in user
        expect{ post :create, params: new_lineitem_hash, format: :json }.to change { Lineitem.count }.from(0).to(1)
      end

      it "returns the new Lineitem as JSON" do
        sign_in user
        post :create, params: new_lineitem_hash, format: :json
        response_body = JSON.parse(response.body)
        expect(response_body["lineitem"]).to eq "paycheck"
      end

      it "returns the new category as JSON" do
        sign_in user
        post :create, params: new_lineitem_hash, format: :json
        response_body = JSON.parse(response.body)
        expect(response_body["category"]).to eq "income"
      end

      it "returns the new Lineitem as JSON" do
        sign_in user
        post :create, params: new_lineitem_hash, format: :json
        response_body = JSON.parse(response.body)
        expect(response_body["value"]).to eq 1900
      end
    end
  end

end
