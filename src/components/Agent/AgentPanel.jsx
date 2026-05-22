export function AgentPanel() {
  return (
    <article className="glass-panel">
      <p className="label">Agent / Self-Modification Loop</p>
      <h2>GitHub Action Safety Gate</h2>
      <ul>
        <li>Request → Plan → Execute</li>
        <li>CI Verify via Actions</li>
        <li>Manual “Approve Merge” required</li>
      </ul>
    </article>
  );
}
