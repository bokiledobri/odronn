# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Odronn.Repo.insert!(%Odronn.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Odronn.Repo
alias Odronn.Comments.Message

seeds = [
  %Message{contact: "Paso", subject: "Lorem sample", text: "loem ipsum dolor sit amet"},
  %Message{contact: "Coa", subject: "Dota review", text: "lorem ipsum dolor sit amere"},
  %Message{
    contact: "Dumb biach",
    subject: "Want some coochie?",
    text: "loddem ipsum dolor seet amen"
  },
  %Message{
    contact: "Smart biac",
    subject: "No coochie for you!",
    text: "lokeslem ipsum dolorum sit amet"
  }
]

Enum.each(seeds, fn seed ->
  Repo.insert!(seed)
end)
