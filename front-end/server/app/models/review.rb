class Review <ActiveRecord::Base
    belongs_to :books
    belongs_to :teachers
end