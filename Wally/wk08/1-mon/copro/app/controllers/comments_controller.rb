class CommentsController < ApplicationController

  def create
    comment = Comment.new
    comment.body = params[:body]
    comment.project_id = params[:project_id]
    comment.user_id = session[:user_id]
    comment.save #returns a boolean
    redirect_to "/projects/#{comment.project_id}"
  end


end
