Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/months", to: 'homes#index'
  get "/about", to: 'homes#index'
  get "/contact", to: 'homes#index'
  get "/month/:id/edit", to: 'homes#index'
  get "/months/:id", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :months, only: [:index, :show, :create, :update] do
        resources :lineitems, only: [:index, :show, :create, :destroy]
      end
    end
  end
end
