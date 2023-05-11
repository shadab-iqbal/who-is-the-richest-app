import UserList from "./user-list";

export default function TopRichest({ list }) {
  const top3Users = [...list].sort((a, b) => b.balance - a.balance).slice(0, 3);
  return <UserList list={top3Users} />;
}
