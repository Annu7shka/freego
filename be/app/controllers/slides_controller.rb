class SlidesController < ApplicationController
  def index
  	response.headers['Access-Control-Allow-Origin'] = '*'
  	@slides = Slide.all
  end
end
