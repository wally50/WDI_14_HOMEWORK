class SessionController < ApplicationController

  helpers do
    def current_user
      User.find_by(id: session[:user_id])
    end

    def admin?
      if logged_in? && current_user.email == "wv@ga.co"
        return true
      else
        return false
      end
    end

    def logged_in?
      !!current_user
    end
  end


  def new
  end

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      # session[:email] = user.email
      redirect_to '/'
    else
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end






end
