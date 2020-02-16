class Api::V1::LineitemsController < ApplicationController
  before_action :authenticate_user!, only: [:show, :create, :destroy]

  def show
    render json: Lineitem.find(params["id"])
  end

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

  def destroy
    lineitem = Lineitem.find(params[:id])
    if current_user == lineitem.user
      lineitem.destroy
      render json: { message: "Delete Successful." }
    else
      rennder json: { message: "Could not delete Lineitem, please try again later." }
    end
  end

private

  def lineitem_params
    params.permit(:month_id, :user_id, :category, :lineitem, :value)
  end
end
