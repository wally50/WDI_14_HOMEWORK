class AddPreviewToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :preview, :string
  end
end
