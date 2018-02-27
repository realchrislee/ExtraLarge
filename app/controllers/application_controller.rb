class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    if !@current_user
      user = User.find_by(id: session[:user_id])
      if user && ActiveSupport::SecurityUtils.secure_compare(user.session_token, session[:session_token])
        @current_user = user
      end
    end
    @current_user
    # return nil unless session[:session_token]
    # @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    session[:user_id] = user.id
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
    session[:user_id] = nil
  end

  def require_login
    unless current_user
      render json: { base: ['Invalid credentials'] }, status: 401
    end
  end
end
