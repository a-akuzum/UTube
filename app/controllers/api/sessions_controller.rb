class Api::SessionsController < ApplicationController
    def create
        credentials = [
            params[:user][:username], 
            params[:user][:password]
        ]
        @user = User.find_by_credentials(*credentials)
        if @user
            login(@user)
            render :show
        else
            render json: ['Incorrect Credentials'], status: 401
        end
    end

    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: ["Logout Aborted"], status: 404
        end
    end

end
