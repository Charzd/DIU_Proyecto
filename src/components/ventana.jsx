import React from 'react';
import '../stylesheets/ventana/ventana.scss';

const Ventana = ({ context }) => {
  const becasData = [
    { nombre: 'Beca Residencia 2025-1', fechaPostulacion: '18/12/2024', estado: 'Pendiente', fechaResolucion: '-----------------' },
    { nombre: 'Beca Residencia 2024-1', fechaPostulacion: '23/12/2023', estado: 'Aprobada', fechaResolucion: '16/02/2024' },
    { nombre: 'Beca Residencia 2023-1', fechaPostulacion: '26/12/2022', estado: 'Aprobada', fechaResolucion: '01/03/2023' },
    { nombre: 'Beca Alimentación 2022-2', fechaPostulacion: '26/02/2022', estado: 'Aprobada', fechaResolucion: '26/05/2022' },
    { nombre: 'Beca Padres y Madres 2021-1', fechaPostulacion: '20/12/2020', estado: 'Rechazada', fechaResolucion: '26/02/2022' },
  ];

  const tramitesData = [
    { nombre: 'Retiro Definitivo 2024-2', fechaPostulacion: '15/11/2024', estado: 'Pendiente', fechaResolucion: '-----------------' },
    { nombre: 'Artículo 44 2024-2', fechaPostulacion: '12/08/2024', estado: 'Rechazado', fechaResolucion: '26/08/2024' },
    { nombre: 'Artículo 44 2023-1', fechaPostulacion: '26/03/2023', estado: 'Aprobado', fechaResolucion: '01/04/2023' },
    { nombre: 'Congelación 2022-1', fechaPostulacion: '08/10/2021', estado: 'Aprobado', fechaResolucion: '06/11/2021' },
    { nombre: 'Cambio de mensión', fechaPostulacion: '25/07/2021', estado: 'Aprobado', fechaResolucion: '05/08/2021' },
  ];

  const data = context === 'tramites' ? tramitesData : becasData;

  return (
    <div className='ventana'>
      <h3>{context === 'tramites' ? 'Estado de Trámites' : 'Estado de Becas'}</h3>
      <table className="ventana__tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha de Postulación</th>
            <th>Estado</th>
            <th>Fecha de Resolución</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.fechaPostulacion}</td>
              <td>
                <span className={`estado-circulo ${item.estado.toLowerCase()}`}></span>
                {item.estado}
              </td>
              <td>{item.fechaResolucion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ventana;
