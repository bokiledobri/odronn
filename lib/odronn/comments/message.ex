defmodule Odronn.Comments.Message do
  use Ecto.Schema
  import Ecto.Changeset

  schema "messages" do
    field(:contact, :string)
    field(:subject, :string)
    field(:seen, :boolean, default: false)
    field(:text, :string)

    timestamps()
  end

  @doc false
  def changeset(message, attrs) do
    message
    |> cast(attrs, [:subject, :contact, :seen, :text])
    |> validate_required([:subject, :text])
  end
end
