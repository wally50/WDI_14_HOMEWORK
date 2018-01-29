Rails.application.routes.draw do
  resources :likes
  resources :comments
  # resources :projects
  get '/', to: 'pages#home'
  get '/login', to: 'session#new'
  post 'session', to: 'session#create'
  delete '/session', to: 'session#destroy'
  # get 'show', to: 'comments#show'
  # get '/projects/:id', to: 'projects#show'

  resources :projects #, only: [:new, :create, :show]
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
