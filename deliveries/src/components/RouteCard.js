import React from 'react';

const RouteCard = ({ routeName, routeDriver, routeEnd, routeDeliveries, onRoute }) => {
  const event = new Date(routeEnd);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className={`routeCard ${onRoute ? '' : 'routeCardDone'} `}>
      <div className="routeCardText">
        <h1>Ruta</h1>
        <p>{routeName}</p>
      </div>

      <div className="routeCardText routeCardTextLarge">
        <h1>Conductor</h1>
        <p>{routeDriver}</p>
      </div>

      <div className="routeCardText routeCardTextLarge">
        <h1>Creada</h1>
        <p> 1 de Enero del 2019</p>
      </div>

      <div className="routeCardText">
        <h1>Inició</h1>
        <p>13:00</p>
      </div>

      <div className={"routeCardText "+`routeCardTextLarge`}>
        <h1>Terminó</h1>
        <p>{routeEnd && event.toLocaleDateString('es-ES', options) || '-'}</p>
      </div>

      <div className="routeCardText">
        <h1>Entregas</h1>
        <p>{routeDeliveries}</p>
      </div>
      <div className={`routeStatus ${onRoute ? '' :'routeStatusDone'}`}>
        <span>{onRoute ? 'En ruta' : 'Completada'}</span>
      </div>
    </div>
  );
};

export default RouteCard;
