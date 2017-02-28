class MoviesController < ApplicationController

  def index
    @movies = Movie.all

    respond_to do |format|
      # Renders the usual `index.html.erb` template
      format.html

      # Send back a specific collection, so no template
      #   needed
      format.json { render json: @movies }

      # Renders the `index.js.erb` template by default
      format.js

    end
  end
end
