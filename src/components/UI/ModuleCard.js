import { Card } from './Card.js';
import './ModuleCard.css';


export default function ModuleCard({module}) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <Card>
      <div className="cardLayout">

        <div className="cardImage">
          <img src={module.ModuleImage} alt="Visual representation of module" />
        </div>

        <div className="cardDetails">
          <h1>{module.ModuleName} ({module.ModuleCode})</h1>
          <p>
            <span className="cardAttribute">Level</span>
            <span className="cardValue">{module.ModuleLevel}</span>
          </p>
        </div>

      </div>
    </Card>
  );
}
