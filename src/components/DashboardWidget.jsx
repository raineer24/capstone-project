import React from "react";

const DashboardWidget = React.memo(({ title, count }) => {
  console.log(`[RENDER] ${title}`);
  return (
    <div>
      <h4>{title}</h4>
      <p>Total: {count}</p>
    </div>
  );
});

export default DashboardWidget;
