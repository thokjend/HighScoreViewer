export function Activities({ data, view }) {
  if (data && view)
    return (
      <>
        <h2>Activities</h2>
        <table>
          <thead>
            <tr className="table-header">
              <th>Name</th>
              <th>Rank</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {data.activities.map((activity) =>
              activity.rank !== -1 ? (
                <tr className="yellow" key={activity.id}>
                  <td>{activity.name}</td>
                  <td>{activity.rank}</td>
                  <td>{activity.score}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </>
    );
}
