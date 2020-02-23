class Api::V1::MonthsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :show, :create, :update, :destroy]


  protect_from_forgery unless: -> { request.format.json? }

  def index
    months = current_user.months
    render json: months
  end

  def show
    render json: Month.find(params["id"])
  end

  def update
    month = Month.find(params[:id])
    if current_user == month.user
      month.update_attributes(month_params)
      render json: month
    else
      render json: Month.all
  end
end

  def create
    month = Month.new(month_params)
    month.user = current_user
    if month.save!
      render json: month
    else
      render json: { error: album.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    month = Month.find(params[:id])
    if current_user == month.user
      month.destroy
      render json: { message: "Delete Successful."}
    else
      render json: { message: "Could not delete."}
    end
  end

private

  def month_params
    params.permit(:month)
  end

end
