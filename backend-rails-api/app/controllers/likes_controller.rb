class LikesController < ApplicationController

    def index
        likes = Like.all

        render json:likes
    end


    def create 
            like = Like.find_or_create_by(name: user_params[:name])
        if user.save 
            render json: like 
        else 
            render json: {error: "fill out name to save"}, status: 403
        end 
    end 

    # def edit 
    #     like = Like.find(params[:id])
    #     render json: like
    # end 

    def show
        like = Like.find(params[:id])

        render json: like
    end
  
    def update
        like = Like.find(params[:id])
        like.update(user_params)
        render json: like
    end

    private

    def like_params
        params.require(:like).permit(:name, :total_score)
    end 

end
