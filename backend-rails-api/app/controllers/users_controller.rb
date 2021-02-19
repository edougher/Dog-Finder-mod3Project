require 'pry'
class UsersController < ApplicationController

    def index
        users = User.all

        render json: users
    end

    def create 
        binding.pry
        user = User.create(params)
        user.image.attach(params[:image])
        
        if user.save 
            render json: user 
        else 
            render json: {error: "fill out name to save"}, status: 403
        end 
    end 

    # def edit 
    #     user = User.find(params[:id])
    #     render json: user
    # end 

    def show
        user = User.find(params[:id])
        render json: user, include: [:likes]
    end
  
    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end

    private

    ##def user_params
    ##    params.require(:user).permit(:name, :age, :location, :image)
    ##end 
    

end
