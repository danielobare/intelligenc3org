class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  get "/books" do
     kitabu = Book.all
     kitabu.to_json
  end 


  get "/review" do
    rev = Review.all
    
    rev.to_json
  end
  
  post "/review" do
    review = Review.create(
      reviews: params[:reviews],    
    )
    review.to_json
  end

  get "/tutors" do
    teachers = Teacher.all
    teachers.to_json
  end

  get "/reading" do
    book = ReadingList.all
    book.to_json
  end

  post "/reading" do
    reading_lists = ReadingList.create(
      book_name: params[:book_name],
    )
    reading_lists.to_json
  end

  delete "/reading/:id" do
    read = ReadingList.find(params[:id])
    read.destroy
    read.to_json
  end
  patch "/reading/:id" do
    book = ReadingList.find(params[:id])
    book.update(
      book_name: params[:book_name],
    )
    book.to_json
  end



end
