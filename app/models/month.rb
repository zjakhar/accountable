class Month < ApplicationRecord
  belongs_to :user

  validates :month, presence: true
end
