defmodule OdronnWeb.Router do
  use OdronnWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api" do
    pipe_through(:api)

    forward("/graphiql", Absinthe.Plug.GraphiQL, schema: OdronnWeb.Schema)
    forward("/", Absinthe.Plug, schema: OdronnWeb.Schema)
  end

  scope "/", OdronnWeb do
    # Use the default browser stack
    pipe_through(:browser)

    get("/", PageController, :index)
    get("/dangerously_enter_username_and_password", PageController, :dsuap)
    get("/dashboard", PageController, :dashboard)
    post("/login", PageController, :login)
    get("/*path", PageController, :dynamic)
  end
end
