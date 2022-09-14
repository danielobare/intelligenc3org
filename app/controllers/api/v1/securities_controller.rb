class Api::V1::SecuritiesController < ApplicationController
    before_action :set_security, only: [:show, :edit, :update, :destroy]
      
        # GET /security
        # GET /security.json
        def index
          @security = Security.all.order(place: :asc)
          render json: @security
        end
      
        # GET /security/1
        # GET /security/1.json
        def show
          if @security
            render json: @security
          else
            render json: @security.errors
          end
        end
      
        # GET /security/new
        def new
          @security = Security.new
        end
      
        # GET /security/1/edit
        def edit
        end
      
        # POST /security
        # POST /security.json
        def create
          @security = Security.new(security_params)
      
      
          if @security.save
            render json: @security
          else
            render json: @security.errors
          end
        end
      
        # PATCH/PUT /security/1
        # PATCH/PUT /security/1.json
        def update
        end
      
        # DELETE /security/1
        # DELETE /security/1.json
        def destroy
          @security.destroy
      
          render json: { notice: 'Security concern has been deleted!' }
        end
      
        private
          def set_security
            @security = Security.find(params[:id])
          end
          def security_params
            params.permit(:place, :description, :country, :casualties)
          end
end
