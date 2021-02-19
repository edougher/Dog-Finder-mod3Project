require 'pry'
class UsersController < ApplicationController

    def index
        users = User.all

        render json: users
    end


    def create 
        user = User.find_or_create_by(name: user_params[:name])
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
        user = User.find(params[:name])
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
