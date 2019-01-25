defmodule OdronnWeb.Schema do
  use Absinthe.Schema
  import_types(OdronnWeb.Schema.CommentTypes)

  alias OdronnWeb.Resolvers.MessageResolver

  query do
    field(:messages, list_of(non_null(:message))) do
      resolve(&MessageResolver.list/3)
    end

    field(:message, non_null(:message)) do
      arg(:id, :id)
      resolve(&MessageResolver.get/3)
    end
  end

  mutation do
    field :create_message, :message do
      arg(:subject, non_null(:string))
      arg(:contact, :string)
      arg(:text, non_null(:string))

      resolve(&MessageResolver.create/3)
    end

    field :leave_seen, :message do
      arg(:id, non_null(:id))
      resolve(&MessageResolver.leave_seen/3)
    end

    field :delete, :message do
      arg(:id, non_null(:id))
      resolve(&MessageResolver.delete/3)
    end
  end
end
