class CreateEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :episodes do |t|
      t.string :Title
      t.string :Description
      t.string :url
      t.belongs_to :level, null: false, foreign_key: true

      t.timestamps
    end
  end
end
