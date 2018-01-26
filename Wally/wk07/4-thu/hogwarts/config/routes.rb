Hogwarts::Application.routes.draw do

  root "houses#index"
  # root "house#index"

  # get "houses/:index", to: "houses#index", as: "houses_path"
  # get "students/:index", to: "students#index", as: "students_path"


  resources :houses, only: [:index, :show]
  resources :students

end
