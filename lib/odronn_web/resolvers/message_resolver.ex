defmodule OdronnWeb.Resolvers.MessageResolver do
  alias Odronn.Comments

  def list(_root, _args, _meta) do
    msgs = Comments.list_messages()
    {:ok, msgs}
  end

  def create(_root, args, _meta) do
    case Comments.create_message(args) do
      {:ok, msg} ->
        {:ok, msg}

      _error ->
        {:error, "could not send message"}
    end
  end
end
