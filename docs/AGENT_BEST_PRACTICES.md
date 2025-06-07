# Background Agent Best Practices

## Core Principles

### 1. Independence & Parallelism
- Agents should work on non-overlapping file sets
- Design tasks to be as independent as possible
- Use the orchestrator to manage dependencies

### 2. Clear Contracts
Each agent should have:
- **Input**: What it needs to start (dependencies)
- **Output**: What files/artifacts it will create
- **Scope**: Clear boundaries of responsibility

### 3. Idempotency
- Agents should be re-runnable without breaking things
- Check for existing work before overwriting
- Use version control to track changes

## Practical Guidelines

### Running Agents

```bash
# Start agents in separate terminals
cd "/path/to/project" && CURSOR_BACKGROUND_AGENT_PROMPT="[prompt]" npm run background
```

### Monitoring Progress

1. **Regular Checks** (every 30-60 min):
   ```bash
   npm run orchestrate
   ```

2. **Validate Outputs**:
   - Check that expected files exist
   - Review quality of generated code
   - Ensure consistency across agents

3. **Handle Blocked Agents**:
   - If an agent seems stuck, check its dependencies
   - Verify prerequisite tasks are complete
   - Consider manual intervention if needed

### Common Patterns

#### Pattern 1: Infrastructure First
```
1. Setup agents (DB, API, Auth) → Run first
2. Design system agents → Run second
3. Feature agents → Run after infrastructure
```

#### Pattern 2: Content & Design Parallel
```
- Content agents can run alongside design agents
- Both feed into UI implementation agents
```

#### Pattern 3: Testing Agents
```
- Can run in parallel with feature development
- Should have read-only access to validate code
```

## Anti-Patterns to Avoid

### ❌ File Conflicts
```
Agent 1: Editing frontend/src/app/page.tsx
Agent 2: Also editing frontend/src/app/page.tsx
Result: Merge conflicts and lost work
```

### ❌ Circular Dependencies
```
Agent A depends on B
Agent B depends on A
Result: Deadlock
```

### ❌ Monolithic Agents
```
One agent doing everything
Result: No parallelism benefit
```

## State Management

### Using State Files
```json
{
  "timestamp": "2024-01-01T00:00:00Z",
  "completedTasks": ["task-1", "task-2"],
  "readyTasks": ["task-3", "task-4"],
  "blockedTasks": 2,
  "totalTasks": 10
}
```

### Recovery Strategies
1. Save progress frequently
2. Use git commits after major milestones
3. Document manual interventions

## Quality Assurance

### Code Review Process
1. Agent completes task
2. Run automated tests
3. Human review for critical paths
4. Integration testing

### Consistency Checks
- Design tokens used consistently
- API contracts match between frontend/backend
- Content tone matches brand guidelines

## Scaling Considerations

### For Larger Projects
- Group related agents into "streams"
- Use sub-orchestrators for complex domains
- Consider agent pools for similar tasks

### Resource Management
- Monitor system resources
- Limit concurrent agents based on:
  - CPU/Memory availability
  - API rate limits
  - Developer cognitive load

## Troubleshooting

### Agent Not Progressing
1. Check terminal output
2. Verify dependencies are met
3. Look for file permission issues
4. Validate environment setup

### Conflicting Changes
1. Use git to identify conflicts
2. Determine which agent's changes to keep
3. Update orchestrator to prevent future conflicts

### Performance Issues
1. Reduce concurrent agents
2. Prioritize critical path tasks
3. Use more specific, focused prompts

## Remember

- **Assume it's possible and figure it out** (your rule #1)
- Agents work best when they have clear, focused goals
- Regular orchestration keeps everything synchronized
- Trust the process but verify the outputs 