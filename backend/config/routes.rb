Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :users, only: [:index, :show]
    resources :associations, only: [:index, :show, :create]
    resources :roles, only: [:index, :show]
    resources :permissions, only: [:index, :show]
    resources :games, only: [:index, :show] do
      collection do
        get :find_unassigned
      end
    end
    resources :assignments, only: [:index, :show, :create, :destroy]
    resources :unavailabilities, only: [:index, :show]
    resources :user_roles, only: [:index, :show]
    resources :game_payments, only: [:index, :show]
    get 'test', to: 'test#index'
  end
end
