class Course < ApplicationRecord
    has_many :level
    has_many :episodes, through: :level
end
