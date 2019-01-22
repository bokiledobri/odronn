defmodule Odronn.CommentsTest do
  use Odronn.DataCase

  alias Odronn.Comments

  describe "messages" do
    alias Odronn.Comments.Message

    @valid_attrs %{contact: "some contact", subject: "some subject", text: "some text"}
    @update_attrs %{contact: "some updated contact", subject: "some updated subject", text: "some updated text"}
    @invalid_attrs %{contact: nil, subject: nil, text: nil}

    def message_fixture(attrs \\ %{}) do
      {:ok, message} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Comments.create_message()

      message
    end

    test "list_messages/0 returns all messages" do
      message = message_fixture()
      assert Comments.list_messages() == [message]
    end

    test "get_message!/1 returns the message with given id" do
      message = message_fixture()
      assert Comments.get_message!(message.id) == message
    end

    test "create_message/1 with valid data creates a message" do
      assert {:ok, %Message{} = message} = Comments.create_message(@valid_attrs)
      assert message.contact == "some contact"
      assert message.subject == "some subject"
      assert message.text == "some text"
    end

    test "create_message/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Comments.create_message(@invalid_attrs)
    end

    test "update_message/2 with valid data updates the message" do
      message = message_fixture()
      assert {:ok, message} = Comments.update_message(message, @update_attrs)
      assert %Message{} = message
      assert message.contact == "some updated contact"
      assert message.subject == "some updated subject"
      assert message.text == "some updated text"
    end

    test "update_message/2 with invalid data returns error changeset" do
      message = message_fixture()
      assert {:error, %Ecto.Changeset{}} = Comments.update_message(message, @invalid_attrs)
      assert message == Comments.get_message!(message.id)
    end

    test "delete_message/1 deletes the message" do
      message = message_fixture()
      assert {:ok, %Message{}} = Comments.delete_message(message)
      assert_raise Ecto.NoResultsError, fn -> Comments.get_message!(message.id) end
    end

    test "change_message/1 returns a message changeset" do
      message = message_fixture()
      assert %Ecto.Changeset{} = Comments.change_message(message)
    end
  end
end
