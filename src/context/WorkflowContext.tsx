import { createContext, useState, ReactNode } from 'react';

interface WorkflowContextType {
  nodes: any[];
  setNodes: React.Dispatch<React.SetStateAction<any[]>>;
  edges: any[];
  setEdges: React.Dispatch<React.SetStateAction<any[]>>;
}

interface WorkflowProviderProps {
    children: ReactNode;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);


export const WorkflowProvider = ({ children }: WorkflowProviderProps) => {
  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);

  return (
    <WorkflowContext.Provider value={{ nodes, setNodes, edges, setEdges }}>
      {children}
    </WorkflowContext.Provider>
  );
};

export default WorkflowContext;
