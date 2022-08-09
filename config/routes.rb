Rails.application.routes.draw do
  get 'greetings', to: 'greetings#index'

    #Forward all requests to StaticController#index except root path
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  #Forward root to StaticController#index
  root 'static#index'
end
