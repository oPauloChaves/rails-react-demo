class Api::V1::TestsController < ApplicationController
  def index
    sleep 0.3
    render json: {users: ['John', 'Paulo', 'James', 'Peter', 'Mary']}
  end
end
