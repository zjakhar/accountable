class LineitemSerializer < ActiveModel::Serializer
  attributes :id, :category, :lineitem, :value, :user

  belongs_to :user
  belongs_to :month


end
