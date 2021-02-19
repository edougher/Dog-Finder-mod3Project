require 'pry'
class UsersController < ApplicationController

    def index
        users = User.all

        render json: users
    end

    def create 
        
        user = User.create(user_params)
        #user.image.attach(params[:image])
        binding.pry
        render json: user 
       # if user.save 
       #     render json: user 
       # else 
       #     render json: {error: "fill out name to save"}, status: 403
       # end 
    end 

    # def edit 
    #     user = User.find(params[:id])
    #     render json: user
    # end 

    def show
        user = User.find(user_params[:id])
        render json: user, include: [:likes]
    end
  
    def update

        user = User.find(params[:id])
        user.update(user_params)
        binding.pry
        render json: user
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end 
    

end
