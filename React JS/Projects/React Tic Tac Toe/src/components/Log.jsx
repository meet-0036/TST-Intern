export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((eachTurn) => (
        <li key={`${eachTurn.square.row}${eachTurn.square.col}`}>
          {eachTurn.player} Selected {eachTurn.square.row},{eachTurn.square.col}
        </li>
      ))}
    </ol>
  );
}
