Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'securities/index'
      post 'securities/create'
      delete 'securities/id', to: 'securities#destroy'
    end

    root 'securities#index'
end
