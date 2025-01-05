import Entry from "./entry";
import entries from "../entries";

export default function Main() {
  const entryElements = entries.map((entry) => (
    <Entry key={entry.id} entry={entry} />
  ));

  return <main>{entryElements}</main>;
}
