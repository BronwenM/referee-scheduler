Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :users, only: [:index, :show, :create, :update, :destroy] do
      resources :assignments, to: 'users#assignments_by_user_id'
    end
    resources :associations, only: [:index, :show, :create]
    resources :roles, only: [:index, :show]
    resources :permissions, only: [:index, :show]
    resources :games, only: [:index, :show, :create, :update, :delete] do
      collection do
        get :find_unassigned
      end
    end
    resources :assignments, only: [:index, :show, :create, :destroy]
    resources :unavailabilities, only: [:index, :show, :update]
    resources :user_roles, only: [:index, :show]
    resources :game_payments, only: [:index, :show]
    resources :sessions, only: [:create, :destroy] #Added this so that I can ping the backend to see if the user is logged in or not.
    get 'test', to: 'test#index'
  end
end
