class LikesController < ApplicationController

    def index
        likes = Like.all

        render json:likes
    end


    def create 
            like = Like.create(like_params)
        # if user.save 
        #     render json: like 
        # else 
            render json: like
    end 

    # def edit 
    #     like = Like.find(like_params[:id])
    #     render json: like
    # end 

    def show
        like = Like.find(like_params[:id])

        render json: like
    end
  
    def update
        like = Like.find(like_params[:id])
        like.update(user_params)
        render json: like
    end

    private

    def like_params
        like_params.require(:like).permit(:animal_id, :user_id)
    end 

end
