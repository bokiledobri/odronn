defmodule OdronnWeb.Schema.CommentTypes do
  use Absinthe.Schema.Notation

  object :message do
    field(:id, non_null(:id))
    field(:subject, non_null(:string))
    field(:contact, :string)
    field(:text, non_null(:string))
    field(:seen, :boolean)
  end
end
