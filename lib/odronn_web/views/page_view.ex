defmodule OdronnWeb.PageView do
  use OdronnWeb, :view
  import Ecto.Query, only: [from: 2]
  alias Odronn.Repo

  def get_pages do
    query =
      from(t in "thesis_pages",
        select: {t.slug, t.title}
      )

    Repo.all(query)
  end
end
