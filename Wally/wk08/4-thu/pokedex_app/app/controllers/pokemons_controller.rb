class PokemonsController < ApplicationController

  def index
    @pokemons = Pokemon.all
  end

  def new
  end

  def create
    pokemon = Pokemon.new
    pokemon.species = params[:species]
    pokemon.nickname = params[:nickname]
    pokemon.level = params[:level]
    pokemon.save
    redirect_to '/'
  end

  def show
    @pokemon = Pokemon.find(params[:id])

  end

  def destroy
    pokemon = Pokemon.find(params[:id])
    if pokemon.destroy
      redirect_to '/'
    else
      render :show
    end
  end


end
