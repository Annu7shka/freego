class StaticController < ActionController::Base
  protect_from_forgery with: :exception

  def homepage
    render file: Rails.root.join('public', 'home.html')
  end
end
