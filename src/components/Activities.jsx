export function Activities({ data, view }) {
  if (data && view)
    return (
      <>
        <h2>Activities</h2>
        <ul>
          {data.activities.map((activity) => (
            <li key={activity.id}>
              <strong>{activity.name}</strong>: Rank {activity.rank}, Score{" "}
              {activity.score}
            </li>
          ))}
        </ul>
      </>
    );
}
