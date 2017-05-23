class User < ActiveRecord::Base
  has_many :books

  validates :username, uniqueness: true
  validates :password, presence: true
end

class Book < ActiveRecord::Base
  belongs_to :user

end
