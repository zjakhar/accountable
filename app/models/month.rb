class Month < ApplicationRecord
  belongs_to :user
  has_many :lineitems

  validates :month, presence: true
end
