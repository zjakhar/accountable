class MonthSerializer < ActiveModel::Serializer
  attributes :id, :month, :user, :lineitems

  belongs_to :user
  has_many :lineitems
end
