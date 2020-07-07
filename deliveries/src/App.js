import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import RouteCard from './components/RouteCard';

function App() {
  const [isPaused] = useState(false);

  const [info, setInfo] = useState([
    {
      route_id: 1,
      routeDriver: 'José Luis cepeda',
      completed_at: '',
      deliveries: 0,
      status: 'onroute',
    },
    { route_id: 2, routeDriver: 'Luis Ángel', completed_at: '', deliveries: 0, status: 'onroute' },
    { route_id: 3, routeDriver: 'Juan Manuel', completed_at: '', deliveries: 0, status: 'onroute' },
    {
      route_id: 4,
      routeDriver: 'Enrique Ávila',
      completed_at: '',
      deliveries: 0,
      status: 'onroute',
    },
    {
      route_id: 5,
      routeDriver: 'Vicente Fox Peña',
      completed_at: '',
      deliveries: 0,
      status: 'onroute',
    },
  ]);

  const routesInfo = [
    {
      route_id: 1,
      routeDriver: 'José Luis cepeda',
      completed_at: '',
      deliveries: 0,
      status: 'onroute',
    },
    { route_id: 2, routeDriver: 'Luis Ángel', completed_at: '', deliveries: 0, status: 'onroute' },
    { route_id: 3, routeDriver: 'Juan Manuel', completed_at: '', deliveries: 0, status: 'onroute' },
    {
      route_id: 4,
      routeDriver: 'Enrique Ávila',
      completed_at: '',
      deliveries: 0,
      status: 'onroute',
    },
    {
      route_id: 5,
      routeDriver: 'Vicente Fox Peña',
      completed_at: '',
      deliveries: 0,
      status: 'onroute',
    },
  ];

  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080/');
    ws.current.onopen = () => console.log('ws opened');
    ws.current.onclose = () => console.log('ws closed');
    return () => {
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;
    ws.current.onmessage = e => {
      if (isPaused) return;
      const message = JSON.parse(e.data);
      let temp;
      switch (message.route_id) {
        case 1:
          temp = Object.assign(routesInfo[0], message);
          setInfo(prevInfo => [temp, prevInfo[1], prevInfo[2], prevInfo[3], prevInfo[4]]);
          break;
        case 2:
          temp = Object.assign(routesInfo[1], message);
          setInfo(prevInfo => [prevInfo[0], temp, prevInfo[2], prevInfo[3], prevInfo[4]]);
          break;
        case 3:
          temp = Object.assign(routesInfo[2], message);
          setInfo(prevInfo => [prevInfo[0], prevInfo[1], temp, prevInfo[3], prevInfo[4]]);
          break;
        case 4:
          temp = Object.assign(routesInfo[3], message);
          setInfo(prevInfo => [prevInfo[0], prevInfo[1], prevInfo[2], temp, prevInfo[4]]);
          break;
        default:
          temp = Object.assign(routesInfo[4], message);
          setInfo(prevInfo => [prevInfo[0], prevInfo[1], prevInfo[2], prevInfo[3], temp]);
          break;
      }
      console.log(info);
    };
  }, [isPaused, info]);

  return (
    <main className="routesContainer">
      {info &&
        info.map((route, idx) => (
          <RouteCard
            key={idx}
            routeName="RG010"
            routeDriver={route.routeDriver}
            routeStart="13:00"
            routeEnd={route['completed_at']}
            routeDeliveries={route.deliveries}
            onRoute={route.status === 'onroute' ? true : false}
          />
        ))}
    </main>
  );
}

export default App;
