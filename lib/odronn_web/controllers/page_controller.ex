defmodule OdronnWeb.PageController do
  use OdronnWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def dynamic(conn, _params) do
    render_dynamic(conn)
  end

  def dsuap(conn, _params) do
    render(conn, "login.html")
  end

  def login(conn, %{"username" => name, "password" => pass}) do
    phrase =
      {Application.get_env(:odronn, :auth)[:uname], Application.get_env(:odronn, :auth)[:pass]}

    new_conn =
      case {name, pass} do
        phrase ->
          put_session(conn, :admin, true)

        _ ->
          put_session(conn, :admin, false)
      end

    redirect(new_conn, to: page_path(new_conn, :index))
  end
end
