Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: 'static#homepage'
  get 'events/index'
  get 'slides/index'
  get '*path', to: 'static#homepage'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
