class Lineitem < ApplicationRecord
  belongs_to :month
  belongs_to :user

  validates :category, presence: true
  validates :lineitem, presence: true
  validates :value, numericality: true
end
