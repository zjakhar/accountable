Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/months", to: 'homes#index'
  get "/months/:id", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :months, only: [:index, :show, :create] do
        resources :lineitems, only: [:index, :show, :create]
      end
    end
  end
end
