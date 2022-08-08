class GreetingsController < ApplicationController
  def index
    @greeting = Greeting.all.shuffle.first.text

    respond_to do |format|
      format.html
      format.json { render json: {data: @greeting, status: 200}}
    end
  end
end
