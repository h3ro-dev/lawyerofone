#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, 'tasks.json');
const STATE_PATH = path.join(process.cwd(), 'task-master', 'state.json');
const LOG_PATH = path.join(process.cwd(), 'task-master', 'logs', `orchestrator-${new Date().toISOString()}.log`);

const PRIORITY_ORDER = { 'CRITICAL': 0, 'HIGH': 1, 'MEDIUM': 2, 'LOW': 3 };

function log(message) {
  fs.appendFileSync(LOG_PATH, `[${new Date().toISOString()}] ${message}\n`);
  console.log(message);
}

function loadConfig() {
  if (!fs.existsSync(CONFIG_PATH)) {
    log('Error: tasks.json not found!');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
}

function loadState() {
  if (!fs.existsSync(STATE_PATH)) {
    return { completedTasks: [] };
  }
  return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
}

function saveState(state) {
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}

function checkCompletion(task) {
  if (!task.completionCheck) return false;
  const { type, path: checkPath } = task.completionCheck;
  const fullPath = path.join(process.cwd(), checkPath);

  switch (type) {
    case 'fileExists':
      return fs.existsSync(fullPath);
    default:
      return false;
  }
}

function findReadyTasks(tasks, completedTasks) {
  const readyTasks = [];
  for (const [taskId, task] of Object.entries(tasks)) {
    if (completedTasks.includes(taskId) || checkCompletion(task)) {
      if (!completedTasks.includes(taskId)) {
        completedTasks.push(taskId);
      }
      continue;
    }

    const dependenciesMet = task.dependencies.every(dep => completedTasks.includes(dep));
    if (dependenciesMet) {
      readyTasks.push({ id: taskId, ...task });
    }
  }

  return readyTasks.sort((a, b) => (PRIORITY_ORDER[a.priority] || 99) - (PRIORITY_ORDER[b.priority] || 99));
}

function displayCommands(tasks, projectName) {
  log(`\n🤖 Deploy ${tasks.length} Agents for ${projectName} Right Now!`);
  
  const totalHours = tasks.reduce((sum, task) => sum + task.estimatedHours, 0);
  const maxHours = Math.max(...tasks.map(t => t.estimatedHours), 0);
  
  log(`\n⏱️  Estimated time: ${maxHours} hours (running in parallel)`);
  log(`📈 Total work: ${totalHours} hours compressed into parallel execution\n`);
  console.log('─'.repeat(80));

  tasks.forEach((task, index) => {
    const command = `cd "${process.cwd()}" && CURSOR_BACKGROUND_AGENT_PROMPT="${task.prompt}" npm run background`;
    console.log(`\n### Agent ${index + 1}: ${task.name} (${task.stream})`);
    console.log(`Priority: ${task.priority} | Estimated: ${task.estimatedHours} hours`);
    console.log('```bash');
    console.log(command);
    console.log('```');
  });
  console.log('\n' + '─'.repeat(80));
}

function main() {
  const { project, tasks } = loadConfig();
  const state = loadState();
  const completedTasks = state.completedTasks;
  
  log(`🚀 Initializing Task Master for ${project.name}...`);
  
  const readyTasks = findReadyTasks(tasks, completedTasks);
  
  const totalTasks = Object.keys(tasks).length;
  const blockedTasks = totalTasks - completedTasks.length - readyTasks.length;

  log(`\n📊 Task Status:`);
  log(`   - Total: ${totalTasks}`);
  log(`   - Completed: ${completedTasks.length}`);
  log(`   - Ready: ${readyTasks.length}`);
  log(`   - Blocked: ${blockedTasks}\n`);

  if (completedTasks.length > 0) {
    log('✅ Completed Tasks:');
    completedTasks.forEach(taskId => log(`   - ${tasks[taskId].name}`));
  }

  if (readyTasks.length > 0) {
    displayCommands(readyTasks, project.name);
  } else if (completedTasks.length === totalTasks) {
    log('\n🎉 All tasks completed! Project is ready.');
  } else {
    log('\n⏸️  No tasks are currently ready. Waiting for dependencies to be completed.');
  }
  
  saveState({ completedTasks });
  log(`\n💾 State saved to ${STATE_PATH}`);
}

if (require.main === module) {
  main();
} 