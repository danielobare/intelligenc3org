class Book <ActiveRecord::Base
    has_many :reviews
    has_many :teachers, through: :reviews
end