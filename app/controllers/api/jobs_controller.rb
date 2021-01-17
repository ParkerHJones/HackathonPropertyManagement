class Api::JobsController < ApplicationController
    before_action :set_job
    before_action :set_job, only: [:show, :update, :destroy]
    def index
      render json: @job.buildings
    end
    def show
      render json: @job
    end
    def create
      @job = @building.jobs.new(job_params)
      if @job.save
        render json: @job
      else
        render json: { errors: @job.errors }, status: :unprocessable_entity
      end
    end
    def update
      if @job.update(job_params)
        render json: @job
      else
        render json: { errors: @job.errors }, status: :unprocessable_entity
      end
    end
    def destroy
      @job.destroy
      render json: { message: 'job deleted'}
    end
    private
      def set_building
        @building = building.find(params[:building_id])
      end
      def set_job
        @job = @building.jobs.find(params[:id])
      end
      def job_params
        params.require(:job).permit(:job_name, :price, :pic)
      end
  end
end
