require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/flash'


set :database, "sqlite3:firstdb.sqlite3"
use Rack::Session::Cookie, key: "rack.session"

require './models'
require "./app"
