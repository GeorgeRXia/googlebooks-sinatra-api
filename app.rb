before do

@current_user = User.find(session[:user_id]) if session[:user_id]
end

get "/" do

erb :index
end

post "/" do

User.create!(username: params[:username], password: params[:password])

redirect "/login"
end


get "/login" do

erb :login
end


post "/login" do

  username = params[:username]
  @password = params[:password]

  current = User.where(username: username).first

  if current.password = @password
    session[:user_id] = current.id

    redirect "/search"
  else

    redirect "/login"
  end

end

get "/search" do


erb :search
end


post "/favorite" do


Book.create(user_id: session[:user_id], title: params[:title] )


end

get "/profile" do

@userbooks = User.find(session[:user_id]).books

  erb :profile
end
