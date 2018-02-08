class EventsController < ApplicationController
  def index
  	response.headers['Access-Control-Allow-Origin'] = '*'
  	@events = Event.all
  end
end
