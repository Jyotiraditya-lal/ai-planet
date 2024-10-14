import WorkflowCanvas from './WorkflowCanvas';
import { WorkflowProvider } from './context/WorkflowContext';
import runWorkflow from './runWorkflow';

const App = () => {
  return (
    <WorkflowProvider>
      <div className="App">
        <h1>LLM Workflow Builder</h1>
        <WorkflowCanvas />
        <button onClick={runWorkflow} className="p-2 mt-4 bg-blue-500 text-white">
          Run Workflow
        </button>
      </div>
    </WorkflowProvider>
  );
};

export default App;
