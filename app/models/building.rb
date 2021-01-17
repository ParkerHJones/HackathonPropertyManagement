class Building < ApplicationRecord
  belongs_to :user
  validates :year_built, :description, :address, presence: true
end
