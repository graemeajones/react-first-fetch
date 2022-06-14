import { useState, useEffect } from 'react';
import { apiRequest } from '../api/apiRequest.js';
import { CardContainer } from '../UI/Card.js';
import ModuleCard from '../UI/ModuleCard.js';


export default function MyModules() {
  // Properties ----------------------------------
  const API_URL = 'https://my.api.mockaroo.com/';
  const API_KEY = '?key=bb6adbc0';
  
  // Hooks ---------------------------------------
  const [loadingMessage, setLoadingMessage] = useState("Loading records ...");
  const [modules, setModules] = useState(null);

  useEffect(() => { fetchModules() }, []);

  // Methods -------------------------------------
  const fetchModules = async () => {
    const outcome = await apiRequest(API_URL, 'Modules', API_KEY);
    if (outcome.success) setModules(outcome.response);
    else setLoadingMessage(`Error ${outcome.response.status}: Modules could not be found.`);
  }

  // View ----------------------------------------
  return (
    <>
      <h1>My Modules</h1>
      {
        !modules
          ? <p>{loadingMessage}</p>
          : modules.length === 0
              ? <p>No modules found</p>
              : <CardContainer>
                  {
                    modules.map((module) =>
                      <ModuleCard key={module.ModuleID} module={module} />
                    )
                  }
                </CardContainer>
      }
    </>
  );
}
