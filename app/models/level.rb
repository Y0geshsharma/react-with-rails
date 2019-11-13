class Level < ApplicationRecord
  belongs_to :courses
  has_many :episodes
end
