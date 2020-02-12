class Api::V1::MonthsController < ApplicationController
  # before_action :authenticate_user!, only: [:index]
  def index
    render json: Month.all
  end

  def create
    month = Month.new(month_params)
    if month.save
      render json { month }
    else
      render json: { error: album.errors.full_messages }, status: :unprocessable_entity
    end
  end

private

  def month_params
    params.permit(:month)
  end

end
