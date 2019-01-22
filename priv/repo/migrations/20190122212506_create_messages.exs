defmodule Odronn.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add(:subject, :string)
      add(:contact, :string)
      add(:seen, :boolean)
      add(:text, :text)

      timestamps()
    end
  end
end
