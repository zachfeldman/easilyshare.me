require 'sinatra'
require 'haml'
require 'coffee-script'

get '/' do
  haml :home
end