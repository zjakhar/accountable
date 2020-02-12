Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/months", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :months, only: [:index]
    end
  end
end
