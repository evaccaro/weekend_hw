class FlowersController < ApplicationController

  def index
    render json: Flower.all
  end

  def show
    render json: Flower.find(params[:id])
  end

  def new
    @flower = Flower.new
  end

  def edit
    @flower = Flower.find(params[:id])
  end

  def create
    @flower = Flower.new(flower_params)
    if @flower.valid?
      @flower.save
      render json: Flower.find(params[:id])
    else
      render :new
    end
  end

  def update
    @flower = Flower.find(params[:id])
    if @flower.update(flower_params)
      render json: Flower.find(params[:id])
    else
      render :edit
    end
  end

  def destroy
    @flower = Flower.find(params[:id])
    @flower.destroy
    render json: Flower.all
  end

  private

  def flower_params
    params.require(:flower).permit(:name, :sun_needs, :soil_needs, :height, :bloom_time, :features)
  end

end
