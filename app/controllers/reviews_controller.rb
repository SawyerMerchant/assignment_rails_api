class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      flash[:success] = "Review successfully created!"
      respond_to do |format|

        format.html { redirect_to reviews_path }
      #
      #   format.json { render  json: @movie,
      #                         status: :created }

        format.js { render :create_success }

      end

    else

      flash[:error] = "Review could not be created"

      respond_to do |format|

        format.html { redirect_to reviews_path }
      #
      #   format.json { render nothing: true,
      #                        status: 400 }

        format.js { render :new }

      end
    end

  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      flash[:success] = "Review deleted"
      respond_to do |format|
        format.html { redirect_to reviews_path }
        format.js { render :delete }
      end
    else
      flash[:error] = "Review could not be created"
      respond_to do |format|
        format.html { redirect_to reviews_path }
        format.js
      end
    end
  end


  private
  def review_params
    params.require( :review ).permit( :reviewer_name, :title, :review_text, :review_date, :movie_id )
  end

end
