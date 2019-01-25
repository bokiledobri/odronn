defmodule OdronnWeb.Resolvers.MessageResolver do
  alias Odronn.Comments

  def list(_root, _args, _meta) do
    msgs = Comments.list_messages()
    {:ok, msgs}
  end

  def get(_root, %{id: id}, _meta) do
    msg = Comments.get_message!(id)
    {:ok, msg}
  end

  def create(_root, args, _meta) do
    case Comments.create_message(args) do
      {:ok, msg} ->
        {:ok, msg}

      _error ->
        {:error, "could not send message"}
    end
  end

  def leave_seen(_root, %{id: id}, _meta) do
    Comments.get_message!(id)
    |> Comments.update_message(%{seen: true})
  end

  def delete(_root, %{id: id}, _meta) do
    Comments.get_message!(id)
    |> Comments.delete_message()
  end
end
