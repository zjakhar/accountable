class API::V1::ArticlesController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]

  def index
    render json: Articles.all
  end

end
