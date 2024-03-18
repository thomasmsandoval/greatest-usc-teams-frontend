export function TeamsIndex(props) {
  return (
    <div>
      <h1>All teams</h1>
      {props.teams.map((team) => (
        <div key={team.id}>
          <h2>{team.year}</h2>
          <img src={team.image} />
          <p>Information: {team.information}</p>
        </div>
      ))}
    </div>
  );
}
