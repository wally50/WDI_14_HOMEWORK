Rails.application.routes.draw do
  resources :dishes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # controlller file & method
  root to: 'pages#home'
  # get '/', to: 'pages#home'
  get '/about', to: 'pages#about'  # look in pages for a method about
  get '/dishes/new', to: 'dishes#new'  # place this above /dishes/:id so that rails reads this first
  get '/dishes/:id', to: 'dishes#show'
  get '/dishes/:id/edit', to: 'dishes#edit'
  get '/dishes', to: 'dishes#index'
  post '/dishes', to: 'dishes#create'
  put '/dishes/:id', to: 'dishes#update'
  destroy 'dishes/:id' to: 'dishes#destroy'
  # resources :dishes

end
