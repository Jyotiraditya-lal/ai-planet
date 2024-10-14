import { useContext } from 'react';
import WorkflowContext from '../context/WorkflowContext';

const useWorkflow = () => {
  const workflowContext = useContext(WorkflowContext);

  if (!workflowContext) {
    throw new Error('useWorkflow must be used within a WorkflowProvider');
  }

  const { nodes, setNodes, edges, setEdges } = workflowContext;

  const addNode = (node: any) => {
    setNodes((current: any) => [...current, node]);
  };

  const addEdge = (edge: any) => {
    setEdges((current: any) => [...current, edge]);
  };

  return { nodes, edges, addNode, addEdge };
};

export default useWorkflow;
