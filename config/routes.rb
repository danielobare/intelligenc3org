Rails.application.routes.draw do
  get 'homepage/index'
  namespace :api do
    namespace :v1 do
      get 'securities/index'
      post 'securities/create'
     delete 'securities/id', to: 'securities#destroy'
   end
  end

  root 'securities#index'
  For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
