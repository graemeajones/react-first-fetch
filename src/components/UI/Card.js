import './Card.css';


export function CardContainer({ children, className }) {
  return (
    <div className={"CardContainer "+className}>
      {children}
    </div>
  );
}

export function Card({ children, onClick, isParentHovering }) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <div className={"Card " + (isParentHovering && "CardHover")} onClick={onClick}>
      {children}
    </div>
  );
}
