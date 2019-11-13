class CreateLevels < ActiveRecord::Migration[6.0]
  def change
    create_table :levels do |t|
      t.string :Title
      t.string :Description
      t.belongs_to :courses, null: false, foreign_key: true

      t.timestamps
    end
  end
end
