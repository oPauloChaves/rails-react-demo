class Api::V1::TestsController < ApplicationController
  def index
    render json: {users: ['John', 'Paulo', 'James', 'Peter', 'Mary']}
  end
end
