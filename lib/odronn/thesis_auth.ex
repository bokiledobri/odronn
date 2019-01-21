defmodule Odronn.ThesisAuth do
  @moduledoc """
  Contains functions for handling Thesis authorization.
  """

  @behaviour Thesis.Auth

  def page_is_editable?(conn) do
    # Editable by the world
    Plug.Conn.get_session(conn, :admin)

    # Or use your own auth strategy. Learn more:
    # https://github.com/infinitered/thesis-phoenix#authorization
  end
end
