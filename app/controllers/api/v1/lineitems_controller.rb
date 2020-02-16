class Api::V1::LineitemsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :show, :create]

  # def index
  #   binding.pry
  #   render json: Lineitem.all
  # end

  # def show
  #   # binding.pry
  #   lineitem = Lineitem.find(params[:id])
  #   render json: lineitem
  # end

  def create
    month = Month.find(params["month_id"])
    lineitem = Lineitem.new(lineitem_params)
    lineitem.user = current_user
    lineitem.month = month
    if lineitem.save
        render json: lineitem
    else
     render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

private

def lineitem_params
  params.permit(:month_id, :user_id, :category, :lineitem, :value)
end

end
