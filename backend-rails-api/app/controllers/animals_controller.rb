class AnimalsController < ApplicationController

    def index
        animals = Animal.all

        render json:animals
    end


    def create 
            animal = Animal.find_or_create_by(name: user_params[:name])
        if user.save 
            render json: animal 
        else 
            render json: {error: "fill out name to save"}, status: 403
        end 
    end 

    # def edit 
    #     animal = Animal.find(params[:id])
    #     render json: animal
    # end 

    def show
        animal = Animal.find(params[:id])
        render json: animal, include: [:likes]
    end
  
    def update
        animal = Animal.find(params[:id])
        animal.update(user_params)
        render json: animal
    end

    def destroy
        animal = Animal.find(params[:id])
        p "**************"
        p animal
        animal.destroy
        render json: {message: "you did it"}
    end

    private

    def animal_params
        params.require(:animal).permit(:name)
    end 
end
